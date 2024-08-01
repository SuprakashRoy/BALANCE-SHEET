function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function calculateTotal() {
    // Assets
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const accountsReceivable = parseFloat(document.getElementById('accountsReceivable').value) || 0;
    const inventory = parseFloat(document.getElementById('inventory').value) || 0;
    const propertyPlantEquipment = parseFloat(document.getElementById('propertyPlantEquipment').value) || 0;
    const intangibleAssets = parseFloat(document.getElementById('intangibleAssets').value) || 0;
    const totalAssets = cash + accountsReceivable + inventory + propertyPlantEquipment + intangibleAssets;
    document.getElementById('totalAssets').value = totalAssets.toFixed(2);

    // Liabilities
    const accountsPayable = parseFloat(document.getElementById('accountsPayable').value) || 0;
    const shortTermDebt = parseFloat(document.getElementById('shortTermDebt').value) || 0;
    const longTermDebt = parseFloat(document.getElementById('longTermDebt').value) || 0;
    const totalLiabilities = accountsPayable + shortTermDebt + longTermDebt;
    document.getElementById('totalLiabilities').value = totalLiabilities.toFixed(2);

    // Equity
    const commonStock = parseFloat(document.getElementById('commonStock').value) || 0;
    const retainedEarnings = parseFloat(document.getElementById('retainedEarnings').value) || 0;
    const totalEquity = commonStock + retainedEarnings;
    document.getElementById('totalEquity').value = totalEquity.toFixed(2);

    // Total Liabilities and Equity
    const totalLiabilitiesAndEquity = totalLiabilities + totalEquity;
    document.getElementById('totalLiabilitiesAndEquity').value = totalLiabilitiesAndEquity.toFixed(2);
}

// Initial call to set default visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section .content').forEach(section => {
        section.style.display = 'none';
    });
});
