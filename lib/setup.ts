export async function callWindow(): Promise<string> {
  console.log('window:', typeof window)

  await new Promise((resolve) => setTimeout(resolve, 1))

  console.log('window.addEventListener', typeof window.addEventListener)

  await new Promise((resolve) => setTimeout(resolve, 1))

  return 'RootStore'
}
