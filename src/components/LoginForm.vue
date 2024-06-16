<template>
  <form class="space-y-4">
    <div>
      <label for="login-email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="login-email"
        type="email"
        class="mt-1 block w-full p-2 border rounded"
        required
      />
    </div>
    <div>
      <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        id="login-password"
        type="password"
        class="mt-1 block w-full p-2 border rounded"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      Login
    </button>
  </form>
</template>