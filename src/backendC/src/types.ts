export type Diagnosis = {
  code: string
  name: string
  latin?: string
}

export type Patient = {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: Gender
  occupation: string
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>

export type NewPatient = Omit<Patient, 'id'>
