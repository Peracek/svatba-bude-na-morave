export interface Registration {
  name: string
  willAttend: 'yes' | 'no'
  friday: 'yes' | 'no'
  openToCarpool: 'yes' | 'no'
  carpoolInfo: string
  accomodation: 'zaridimSiSam' | 'konirna' | 'stojanovoGymnazium'
  note: string
}
