export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length !== 11) {
    return phoneNumber;
  }

  return phoneNumber.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}
