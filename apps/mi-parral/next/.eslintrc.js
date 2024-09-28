module.exports = {
    parser: '@typescript-eslint/parser', // Utiliza el parser de TypeScript
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // Extiende las reglas recomendadas para TS
    ],
    rules: {
      // Desactiva reglas específicas
      '@typescript-eslint/no-unused-vars': 'off', // Desactiva la regla de variables no usadas
      '@typescript-eslint/no-explicit-any': 'off', // Permite el uso de `any`
      'no-console': 'off', // Permite el uso de console.log
    },
  };
  