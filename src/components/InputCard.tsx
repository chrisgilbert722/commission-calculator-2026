import React from 'react';
import type { CommissionInput } from '../logic/commissionCalculations';

interface InputCardProps {
    values: CommissionInput;
    onChange: (field: keyof CommissionInput, value: number | boolean) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Total Sales Amount */}
                <div>
                    <label htmlFor="totalSales">Total Sales Amount ($)</label>
                    <input
                        type="number"
                        id="totalSales"
                        value={values.totalSales}
                        onChange={(e) => onChange('totalSales', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your total sales volume for the period
                    </span>
                </div>

                {/* Commission Rate */}
                <div>
                    <label htmlFor="commissionRate">Commission Rate (%)</label>
                    <input
                        type="number"
                        id="commissionRate"
                        value={values.commissionRate}
                        onChange={(e) => onChange('commissionRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="100"
                        step="0.5"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your commission percentage on sales
                    </span>
                </div>

                {/* Base Salary */}
                <div>
                    <label htmlFor="baseSalary">Base Salary ($) - Optional</label>
                    <input
                        type="number"
                        id="baseSalary"
                        value={values.baseSalary}
                        onChange={(e) => onChange('baseSalary', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="500"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Fixed base pay in addition to commission (leave 0 if none)
                    </span>
                </div>
            </div>
        </div>
    );
};
