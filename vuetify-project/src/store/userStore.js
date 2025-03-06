import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const users = ref([]);
  const error = ref(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      users.value = response.data;
    } catch (err) {
      error.value = "❌ خطأ أثناء جلب المستخدمين";
    }
  };

  const login = async (username, password) => {
    error.value = null;
    try {
      if (!users.value.length) await fetchUsers();
      const foundUser = users.value.find(u => u.username === username);
      if (!foundUser) throw new Error("❌ المستخدم غير موجود");
      if (password !== "password") throw new Error("❌ كلمة المرور غير صحيحة");

      user.value = foundUser;
      isAuthenticated.value = true;
      localStorage.setItem("user", JSON.stringify(foundUser));
    } catch (err) {
      error.value = err.message;
    }
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("user");
  };

  const loadUser = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      user.value = JSON.parse(savedUser);
      isAuthenticated.value = true;
    }
  };

  loadUser();

  return { user, isAuthenticated, error, login, logout, fetchUsers };
});
