import React from 'react';
import type { CommissionInput } from '../logic/commissionCalculations';

interface ScenarioControlsProps {
    values: CommissionInput;
    onChange: (field: keyof CommissionInput, value: number | boolean) => void;
}

export const ScenarioControls: React.FC<ScenarioControlsProps> = ({ values, onChange }) => {
    const salesOptions = [
        { label: '$25,000', value: 25000 },
        { label: '$50,000', value: 50000 },
        { label: '$100,000', value: 100000 },
        { label: '$250,000', value: 250000 },
    ];

    const rateOptions = [
        { label: '5%', value: 5 },
        { label: '10%', value: 10 },
        { label: '15%', value: 15 },
        { label: '20%', value: 20 },
    ];

    return (
        <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Quick Adjustments</h3>

            {/* Sales Quick Select */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ marginBottom: 'var(--space-2)' }}>Total Sales</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {salesOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('totalSales', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.totalSales === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.totalSales === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.totalSales === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Commission Rate Quick Select */}
            <div>
                <label style={{ marginBottom: 'var(--space-2)' }}>Commission Rate</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {rateOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('commissionRate', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.commissionRate === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.commissionRate === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.commissionRate === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
