import { Tags } from 'exiftool-vendored'

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const exifTool = require('exiftool-vendored').exiftool

export const readExif = async (file: string): Promise<Tags> => await exifTool.read(file)
