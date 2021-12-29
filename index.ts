export const validBdNumber = (phoneNumber: string) => {
    const re = /^(?:\+?88)?01[13-9]\d{8}$/;
    return re.test(phoneNumber)
};