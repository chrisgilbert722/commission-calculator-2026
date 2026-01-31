export interface CommissionInput {
    totalSales: number;
    commissionRate: number;
    baseSalary: number;
}

export interface CommissionResult {
    commissionEarned: number;
    totalEarnings: number;
    effectiveCommissionRate: number;
    totalSales: number;
    commissionRate: number;
    baseSalary: number;
    hasBaseSalary: boolean;
    commissionPercentOfTotal: number;
    message: string;
}

export function calculateCommission(input: CommissionInput): CommissionResult {
    const totalSales = Math.max(0, input.totalSales);
    const commissionRate = Math.max(0, Math.min(100, input.commissionRate));
    const baseSalary = Math.max(0, input.baseSalary);

    // Calculate commission
    const commissionEarned = totalSales * (commissionRate / 100);
    const totalEarnings = commissionEarned + baseSalary;

    // Calculate effective commission rate (commission as % of total sales)
    const effectiveCommissionRate = totalSales > 0 ? (commissionEarned / totalSales) * 100 : 0;

    // Commission as percentage of total earnings
    const commissionPercentOfTotal = totalEarnings > 0 ? (commissionEarned / totalEarnings) * 100 : 0;

    const hasBaseSalary = baseSalary > 0;

    // Generate message
    let message: string;
    if (totalSales === 0) {
        message = 'Enter your total sales to calculate commission';
    } else if (commissionRate === 0) {
        message = 'Enter a commission rate to see earnings';
    } else if (hasBaseSalary) {
        message = `${commissionRate}% commission on ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalSales)} in sales plus base`;
    } else {
        message = `${commissionRate}% commission on ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalSales)} in sales`;
    }

    return {
        commissionEarned,
        totalEarnings,
        effectiveCommissionRate,
        totalSales,
        commissionRate,
        baseSalary,
        hasBaseSalary,
        commissionPercentOfTotal,
        message
    };
}
