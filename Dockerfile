ARG NODE_VERSION

FROM --platform=$BUILDPLATFORM node:${NODE_VERSION:?Required} AS build
ARG ORIGIN
ARG PUBLIC_SEO_EXCLUDED_ROUTES
ENV ORIGIN=https://${ORIGIN:?Required}
ENV PUBLIC_SEO_EXCLUDED_ROUTES=${PUBLIC_SEO_EXCLUDED_ROUTES:?Required}
WORKDIR /app

# Prepare dependency installation.
COPY ./ ./

# Install & configure pnpm.
RUN npm install --global pnpm

# Install dependencies.
RUN pnpm install

RUN pnpm build --prod

FROM nginx:alpine AS runtime

HEALTHCHECK --start-period=15s --interval=5s \
            CMD [ "wget", "-O", "/dev/null", "--header", "X-Health-Check: 1", "http://localhost/" ]

# Run logrotate at midnight.
RUN apk add --no-cache logrotate cronie && \
    echo '0 0 * * * root /usr/sbin/logrotate -v /etc/logrotate.d/nginx 2> /var/log/logrotate.log' > /etc/crontab && \
    printf '#!/usr/bin/env sh\n/usr/sbin/crond -m off -n &\n' > /docker-entrypoint.d/crond.sh && \
    chmod +x /docker-entrypoint.d/crond.sh && \
    sed -i \
        -E \
        -e 's/daily/daily\n\tdateext/' \
        -e 's/rotate \d+/rotate 7/' \
        /etc/logrotate.d/nginx

# Update all packages.
RUN apk upgrade --update-cache --no-cache

# Build output.
COPY --from=build \
     --chown=nginx:nginx \
     /app/dist \
     /usr/share/nginx/html/

# Validate nginx config.
RUN nginx -t

ARG GIT_SHA
ARG GIT_REF_NAME

ENV GIT_SHA=$GIT_SHA
ENV GIT_REF_NAME=$GIT_REF_NAME
