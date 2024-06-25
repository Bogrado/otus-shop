<template>
  <aside class="bg-gray-800 text-white">
    <nav>
      <ul>
        <li>
          <router-link to="/admin" class="block p-4 hover:bg-gray-700 m-4">
            Overview
          </router-link>
        </li>
        <li>
          <router-link to="/admin/dashboard" class="block p-4 hover:bg-gray-700 m-4">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/admin/products" class="block p-4 hover:bg-gray-700 m-4">
            Products
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script setup>
</script>