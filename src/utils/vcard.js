export function downloadVCard(executive, organization) {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${executive.name}`,
    `TITLE:${executive.title}`,
    `ORG:${organization.name}`,
    `TEL;TYPE=WORK,VOICE:${executive.phone}`,
    `EMAIL;TYPE=WORK:${executive.email}`,
    `URL:${executive.websiteUrl}`,
    'END:VCARD',
  ].join('\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = executive.vcardFileName
  link.click()
  URL.revokeObjectURL(url)
}
