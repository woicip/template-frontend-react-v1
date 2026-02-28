import * as v from 'valibot';

const createEnv = () => {
  const EnvSchema = v.object({
    API_URL: v.string(),
    ENABLE_API_MOCKING: v.optional(
      v.pipe(
        v.string(),
        v.check((s) => s === 'true' || s === 'false'),
        v.transform((s) => s === 'true')
      )
    ),
    APP_URL: v.optional(v.string(), 'http://localhost:5177'),
    APP_MOCK_API_PORT: v.optional(v.string(), '8080'),
    TOKEN_NAME: v.optional(v.string(), 'template-frontend-react-v1'),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value;
    }
    return acc;
  }, {});

  const parsedEnv = v.safeParse(EnvSchema, envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
The following variables are missing or invalid:
${Object.entries(parsedEnv.issues)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n')}
`,
    );
  }

  return parsedEnv.output;
};

export const env = createEnv();