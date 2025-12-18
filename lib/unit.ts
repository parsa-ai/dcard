function detectBank(cardNumber: string, banks: { bank: string; title: string; bin: string; }[]) {
    const cleanNumber = cardNumber.replace(/\D/g, '');
    const bin = cleanNumber.slice(0, 4);

    if (bin.length < 4) return null;
    const bank = banks.filter((item) => {
        return item.bin.slice(0, 4) == bin 
    }) || null;

    return bank[0]?.bank || "unknow"
}
export { detectBank };