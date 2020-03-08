
module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
      './__mocks__/mockFirebase'
    ],
    automock: false,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}