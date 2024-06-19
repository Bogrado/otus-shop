<template>
  <aside class="w-64 bg-gray-800 text-white min-h-screen">
    <nav>
      <ul>
        <li>
          <router-link to="/admin/dashboard" class="block p-4 hover:bg-gray-700">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/admin/products" class="block p-4 hover:bg-gray-700">
            Products
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>