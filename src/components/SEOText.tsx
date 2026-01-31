import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This commission calculator estimates earnings based on sales volume and commission
                rate. These figures are estimates only and actual earnings will depend on your
                specific commission structure, quotas, tiers, and employer policies. Commission
                calculations shown are before taxes and deductions. This calculator is for
                informational purposes and does not guarantee any specific income level.
            </p>
        </div>
    );
};
