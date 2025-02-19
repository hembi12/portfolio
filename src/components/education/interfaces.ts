export interface EducationExperience {
  id?: string; // ✅ ID opcional para facilitar manipulación de datos
  institution: string;
  degree: string;
  duration: string;
  logo: URL | string; // ✅ Más controlado, permite `URL` o `string`
  link: URL | string;
}

export interface Certificate {
  id?: string; // ✅ ID opcional
  institution: string;
  title: string;
  duration: string;
  logo: URL | string; // ✅ Evita errores con URLs inválidas
  pdf: URL | string;
}
