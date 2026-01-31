import React from 'react';
import type { CommissionResult } from '../logic/commissionCalculations';

interface BreakdownTableProps {
    result: CommissionResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const salesRows = [
        { label: 'Total Sales Amount', value: formatMoney(result.totalSales), isTotal: false },
        { label: 'Commission Rate', value: `${result.commissionRate.toFixed(1)}%`, isTotal: false },
        { label: 'Estimated Commission Earned', value: formatMoney(result.commissionEarned), isTotal: true },
    ];

    const earningsRows = [
        { label: 'Commission Earned', value: formatMoney(result.commissionEarned), isTotal: false },
        { label: 'Base Salary', value: formatMoney(result.baseSalary), isTotal: false },
        { label: 'Estimated Total Earnings', value: formatMoney(result.totalEarnings), isTotal: true },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#166534' : 'inherit'
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Commission Calculation Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Estimated Commission Calculation</h3>
            </div>
            {renderTable(salesRows)}

            {/* Total Earnings Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F0FDF4' }}>
                <h3 style={{ fontSize: '1rem', color: '#166534' }}>Estimated Total Earnings</h3>
            </div>
            {renderTable(earningsRows, true)}
        </div>
    );
};
