export async function resolve(promise: Promise<any>) {
  const resolved: { data: any; error: any | null } = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
