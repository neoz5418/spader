import { defineConfig } from '@kubb/core'
import { pluginOas, schemaKeywords } from '@kubb/plugin-oas'
import { pluginFaker } from '@kubb/swagger-faker'
import { pluginMsw } from '@kubb/swagger-msw'
import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query'
import { pluginTs } from '@kubb/swagger-ts'
import { pluginZod } from '@kubb/swagger-zod'
import { pluginClient } from '@kubb/swagger-client'
import { pluginRedoc } from '@kubb/plugin-redoc'

import * as mutation from './templates/mutate/index'
import * as operations from './templates/operations/index'
import * as queryKey from './templates/queryKey/index'


/**
 * Constantes globales
 */
const OPENAPI_URL = './openapi.json'
const OUTPUT_PATH = './src/gen'
// const OUTPUT_PATH_TEST = './tests/gen'

const defaultPlugins = [
  pluginOas({ output: false }),
  pluginTs({
    output: {
      path: './ts',
    },
    transformers: {
      name: (name, _type) => {
        return `${name}Type`
      },
    },
  }),
];


const commonConfig = {
  name: 'SpaderApi',
  root: '.',
  input: {
    path: OPENAPI_URL,
  },
  output: {
    path: OUTPUT_PATH,
    clean: true,
  },
  plugins: [
    ...defaultPlugins,
    pluginClient({
      client: {
        importPath: '@/utils/client.ts',
      },
    }),
    pluginTanstackQuery({
      client: {
        importPath: '@/utils/client.ts',
      },
      transformers: {
        name: (name, type) => {
          if (type === 'file' || type === 'function') {
            return `${name}Hook`
          }
          return name
        },
      },
      output: {
        path: './hooks',
      },
      framework: 'react',
      query: {
        queryKey: (keys) => ['"v5"', ...keys],
      },
      suspense: {},
      // override: [
      //   {
      //     type: 'operationId',
      //     pattern: 'findPetsByTags',
      //     options: {
      //       dataReturnType: 'full',
      //       infinite: {
      //         queryParam: 'pageSize',
      //         initialPageParam: 0,
      //         cursorParam: undefined,
      //       },
      //       templates: {
      //         queryKey: queryKey.templates,
      //       },
      //     },
      //   },
      //   {
      //     type: 'operationId',
      //     pattern: 'updatePetWithForm',
      //     options: {
      //       query: {
      //         queryKey: (key: unknown[]) => key,
      //         methods: ['post'],
      //       },
      //     },
      //   },
      // ],
      templates: {
        operations: operations.templates,
        mutation: mutation.templates,
      },
    }),
    pluginZod({
      output: {
        path: './zod',
      },
      transformers: {
        name: (name, type) => (type === 'file' ? `${name}.gen` : name),
        schema: ({ schema, parentName, name }, defaultSchemas) => {
          /* override a property with name 'name'
             Pet:
                required:
                  - name
                type: object
                properties:
                  name:
                    type: string
                    example: doggie
          */
          if (parentName === 'Pet' && name === 'name') {
            // see mapper where we map `productionName` to `faker.commerce.productName`, the original name will be kept.
            return [...defaultSchemas, { keyword: schemaKeywords.name, args: 'productName' }]
          }
          return undefined
        },
      },
      mapper: {
        // productName: 'z.string().uuid()',
      },
      importPath: '@/utils/zod.ts',
      typedSchema: true,
    }),
  ],
};

// const testConfig = {
//   name: 'pokeApiTest',
//   root: '.',
//   input: {
//     path: OPENAPI_URL,
//   },
//   output: {
//     path: OUTPUT_PATH_TEST,
//     clean: true,
//   },
//   plugins: [
//     ...defaultPlugins,
//     pluginFaker({
//       output: {
//         path: './mocks',
//         exportType: false,
//       },
//       group: { type: 'tag', output: './mocks/{{tag}}Mocks' },
//       transformers: {
//         schema: ({ schema, parentName, name }, defaultSchemas) => {
//           console.log('schema: ', schema);
//           if (parentName === 'Pokemon' && name === 'name') {
//             // console.log('parentName: ', parentName, name, schema);
//           }
//           return undefined;
//         },
//       },
//       mapper: {
//         url: 'faker.internet.url() + "/" + faker.number.int(100) + "/"'
//       },
//       seed: [100],
//     }),
//     pluginMsw({
//       output: {
//         path: './msw',
//       },
//       group: { type: 'tag', output: './msw/{{tag}}Handlers' },
//     }),
//   ],
// };

const docsConfig = {
  name: 'SpaderApiDocs',
  input: {
    path: OPENAPI_URL,
  },
  output: {
    path: './docs',
  },
  plugins: [
    pluginOas({ output: false }),
    pluginRedoc({
      output: {
        path: './index.html',
      },
    }),
  ],
};

export default defineConfig(async () => {
  await setTimeout(() => {
    // wait for 1s, async behaviour
    return Promise.resolve(true)
  }, 1000)
  return [
    commonConfig,
    // testConfig,
    // docsConfig,
  ]
})