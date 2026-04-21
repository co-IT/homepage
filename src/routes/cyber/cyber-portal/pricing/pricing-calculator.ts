import { Package } from "./package";

export class PricingCalculator {
  public static calculatePricePerUserPerMonth(users: number, durationMonths: number, pkg: Package): number {
    if (users < 1) users = 1;

    const basePrice = this.getUnitPrice(users);
    const discount = this.getDiscount(durationMonths);
    const factor = this.getFactor(pkg);

    const result = basePrice * factor * (1 - discount);

    return this.roundAwayFromZero(result, 2);
  }

  public static calculatePricePerMonth(users: number, durationMonths: number, pkg: Package): number {
    if (users < 1) users = 1;

    const basePrice = this.getTotalPrice(users);
    const discount = this.getDiscount(durationMonths);
    const factor = this.getFactor(pkg);

    const result = basePrice * factor * (1 - discount);

    return this.roundAwayFromZero(result, 2);
  }

  private static getUnitPrice(users: number): number {
    return this.licensePricingVariantB.unitPrice(users);
  }

  private static getTotalPrice(users: number): number {
    return this.licensePricingVariantB.totalPrice(users);
  }

  private static getFactor(pkg: Package): number {
    switch (pkg) {
      case Package.Starter:
        return 1.0;
      case Package.Profi:
        return 1.3;
      case Package.Experte:
        return 2.0;
      default:
        throw new Error('Unbekanntes Paket');
    }
  }

  public static getDiscount(months: number): number {
    switch (months) {
      case 1:
        return 0.0;
      case 3:
        return 0.02;
      case 6:
        return 0.04;
      case 12:
        return 0.1;
      case 18:
        return 0.12;
      case 24:
        return 0.15;
      case 36:
        return 0.18;
      case 48:
        return 0.2;
      default:
        throw new Error('Ungültige Laufzeit');
    }
  }

  private static roundAwayFromZero(value: number, decimals: number): number {
    const factor = 10 ** decimals;

    return (Math.sign(value) * Math.round(Math.abs(value) * factor)) / factor;
  }

  private static licensePricingVariantB = (() => {
    const points = [
      [1, 20.0],
      [5, 30.0],
      [10, 40.0],
      [25, 75.0],
      [50, 125.0],
      [75, 180.0],
      [100, 225.0],
      [200, 416.5],
      [250, 512.5],
      [500, 750.0],
      [1000, 1350.0],
      [6000, 1800.0]
    ];

    const round2 = (value: number) => Number(value.toFixed(2));

    function totalPrice(users: number) {
      if (!Number.isInteger(users) || users < 1) {
        throw new Error('users must be a positive integer');
      }

      // Plateau ab 6000 Anwendern
      if (users > 6000) {
        return round2(users * 0.3);
      }

      for (let i = 0; i < points.length - 1; i++) {
        const [u1, t1] = points[i];
        const [u2, t2] = points[i + 1];

        if (users >= u1 && users <= u2) {
          if (users === u1) return round2(t1);
          if (users === u2) return round2(t2);

          const s1 = Math.sqrt(u1);
          const s2 = Math.sqrt(u2);
          const s = Math.sqrt(users);

          const factor = (s - s1) / (s2 - s1);
          const total = t1 + (t2 - t1) * factor;

          return round2(total);
        }
      }

      throw new Error('No pricing interval found.');
    }

    function unitPrice(users: number) {
      const total = totalPrice(users);
      const unit = total / users;

      return round2(Math.max(0.3, unit));
    }

    return {
      totalPrice,
      unitPrice
    };
  })();
}
