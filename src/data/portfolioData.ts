export const candidate = {
  name: "Хасан Хасиев",
  fullName: "Хасиев Хасан Илясович",
  initials: "ХХ",
  role: "Frontend Developer",
  age: 23,
  dob: "19 октября 2002",
  location: "Грозный, Россия",
  phone: "+7 (938) 889-95-30",
  email: "khasievh@gmail.com",
  telegram: "https://t.me/adloyr",
  telegramHandle: "@adloyr",
  citizenship: "Россия",
  relocation: true,
  experience: "3 года 3 месяца",
  english: "B1 (Intermediate)",
  about: `Frontend-разработчик с 3 годами опыта, работаю в продуктовых и сервисных командах. Инициативный, легко встраиваюсь в процессы, люблю улучшать продукт и писать предсказуемый, поддерживаемый код. Увлечён ростом в сторону Team Lead и углублением в архитектуру, также интересуюсь backend-разработкой.`,
  hobbies: [
    { label: "Английский язык", emoji: "🇬🇧" },
    { label: "Арабский язык", emoji: "🇸🇦" },
    { label: "Японский язык", emoji: "🇯🇵" },
    { label: "Спорт", emoji: "⚽" },
    { label: "Киберспорт", emoji: "🎮" },
  ],
  roles: [
    "Frontend Developer",
    "Vue.js Specialist",
    "TypeScript Engineer",
    "Team Lead aspirant",
    "UI/UX Enthusiast",
  ],
};

export const stats = [
  { value: 3, suffix: "+", label: "года опыта" },
  { value: 3, suffix: "", label: "компании" },
  { value: 10, suffix: "+", label: "технологий" },
  { value: 3, suffix: "", label: "проекта параллельно" },
];

export const skills = {
  core: [
    { name: "JavaScript", level: 95, icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", level: 88, icon: "SiTypescript", color: "#3178C6" },
    { name: "HTML5", level: 95, icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3 / SCSS", level: 92, icon: "SiCss3", color: "#1572B6" },
    { name: "BEM", level: 88, icon: "SiBem", color: "#000000" },
  ],
  frameworks: [
    { name: "Vue.js 2/3", level: 93, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "React", level: 75, icon: "SiReact", color: "#61DAFB" },
    { name: "NuxtJS", level: 72, icon: "SiNuxtdotjs", color: "#00DC82" },
    { name: "Pinia", level: 88, icon: "SiPinia", color: "#FFD859" },
    { name: "Vuex", level: 88, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "Redux", level: 70, icon: "SiRedux", color: "#764ABC" },
  ],
  tools: [
    { name: "Vite", level: 85, icon: "SiVite", color: "#646CFF" },
    { name: "Webpack", level: 80, icon: "SiWebpack", color: "#8DD6F9" },
    { name: "Git / GitLab", level: 88, icon: "SiGit", color: "#F05032" },
    { name: "Axios", level: 88, icon: "SiAxios", color: "#5A29E4" },
    { name: "WebSocket", level: 78, icon: "SiSocketdotio", color: "#010101" },
    { name: "REST API", level: 90, icon: "SiOpenapi", color: "#6BA539" },
  ],
  other: [
    { name: "TinyMCE", level: 80, icon: "SiTinymce", color: "#169DE0" },
    { name: "TipTap", level: 75, icon: "SiTiptap", color: "#000000" },
    { name: "Vue I18n", level: 82, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "Vuelidate", level: 78, icon: "SiVuedotjs", color: "#4FC08D" },
    { name: "jQuery", level: 72, icon: "SiJquery", color: "#0769AD" },
    { name: "Twig", level: 68, icon: "SiTwig", color: "#67B93E" },
  ],
};

export const experience = [
  {
    id: 1,
    company: "OOO «Letteros»",
    url: "https://letteros.com",
    period: "Январь 2025 — настоящее время",
    duration: "1 год 3 месяца",
    role: "Frontend-разработчик",
    current: true,
    description: "Продуктовая команда, создающая платформу для автоматизации дизайна и подготовки писем/презентаций.",
    achievements: [
      "Разработка и поддержка платформы: личный кабинет, админка, лендинг, редактор презентаций и писем",
      "Создание адаптивных UI-компонентов на Vue 2 и Vue 3",
      "Интеграция с backend-API, разработка микросервисного функционала",
      "Оптимизация производительности, улучшение отзывчивости интерфейсов",
      "Разработка роутинга, настройка авторизации",
      "Участие в code review и ежедневных спринтах",
    ],
    stack: ["Vue 2/3", "TypeScript", "Pinia", "Vuex", "WebSocket", "Vite", "Webpack", "Axios", "Vue I18n", "TinyMCE", "TipTap", "Twig", "GitLab"],
    color: "#6C63FF",
  },
  {
    id: 2,
    company: "БТ21 (насотку.рф)",
    url: "https://насотку.рф",
    period: "Июль 2023 — Декабрь 2024",
    duration: "1 год 6 месяцев",
    role: "Frontend-разработчик VueJs",
    current: false,
    description: "Разработка сервисов для подготовки к ЕГЭ/ОГЭ.",
    achievements: [
      "Разработка 3 проектов параллельно: соцсеть, модуль экзаменов, CRM",
      "Миграция приложения с Vue 2 + jQuery → Vue 3",
      "Создание адаптивных компонентов (Composition API, Options API)",
      "Оптимизация кода и API-запросов, кеширование",
      "Разработка роутинга, работа с авторизацией",
      "Наставничество стажёров, проведение code review",
    ],
    stack: ["Vue 3", "JavaScript", "HTML/CSS/SCSS", "jQuery", "Pinia", "Vuex", "WebSocket", "Vite", "Axios", "GitHub"],
    color: "#00D9FF",
  },
  {
    id: 3,
    company: "Cloveri",
    url: "https://cloveri.com",
    period: "Январь 2023 — Июль 2023",
    duration: "7 месяцев",
    role: "Frontend-разработчик",
    current: false,
    description: "Разработка SPA для повышения квалификации специалистов.",
    achievements: [
      "Разработка и рефакторинг компонентов на React",
      "Управление состоянием через Redux",
      "Адаптивная, кроссбраузерная вёрстка",
      "Разработка новых функциональных блоков на нативном JS",
    ],
    stack: ["TypeScript", "React", "Redux", "SCSS", "Vite", "GitLab"],
    color: "#4ADE80",
  },
];

export const codeSnippets = [
  {
    title: "Vue 3 Composable",
    language: "typescript",
    description: "Reusable async data fetching hook",
    code: `// useApiData.ts — переиспользуемый composable
import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useApiData<T>(url: string) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetch = async () => {
    loading.value = true
    try {
      const res = await axios.get<T>(url)
      data.value = res.data
    } catch (e) {
      error.value = 'Ошибка загрузки данных'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetch)
  return { data, loading, error, refetch: fetch }
}`,
  },
  {
    title: "TypeScript Component",
    language: "typescript",
    description: "Typed Vue 3 component with Pinia",
    code: `// UserProfile.vue — типизированный компонент
<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

interface Props {
  userId: string
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
})

const store = useUserStore()
const user = computed(() => store.getUserById(props.userId))
const fullName = computed(
  () => \`\${user.value?.firstName} \${user.value?.lastName}\`
)
</script>`,
  },
  {
    title: "Framer Motion",
    language: "tsx",
    description: "React animated card component",
    code: `// AnimatedCard.tsx — анимированная карточка
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

export const AnimatedCard = ({ children }: Props) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="card"
  >
    {children}
  </motion.div>
)`,
  },
  {
    title: "WebSocket Hook",
    language: "typescript",
    description: "Real-time connection composable",
    code: `// useWebSocket.ts — WebSocket composable
import { ref, onUnmounted } from 'vue'

export function useWebSocket(url: string) {
  const ws = ref<WebSocket | null>(null)
  const messages = ref<string[]>([])
  const connected = ref(false)

  const connect = () => {
    ws.value = new WebSocket(url)
    ws.value.onopen = () => { connected.value = true }
    ws.value.onmessage = ({ data }) => {
      messages.value.push(JSON.parse(data))
    }
    ws.value.onclose = () => { connected.value = false }
  }

  const send = (msg: unknown) =>
    ws.value?.send(JSON.stringify(msg))

  onUnmounted(() => ws.value?.close())
  return { connect, send, messages, connected }
}`,
  },
  {
    title: "Vue 3 Migration",
    language: "typescript",
    description: "Options API → Composition API",
    code: `// До (Vue 2 Options API)
export default {
  data: () => ({ count: 0, loading: false }),
  computed: {
    doubled() { return this.count * 2 }
  },
  methods: {
    increment() { this.count++ }
  }
}

// После (Vue 3 Composition API)
import { ref, computed } from 'vue'

const count = ref(0)
const loading = ref(false)
const doubled = computed(() => count.value * 2)
const increment = () => count.value++

// Чище, типобезопаснее, легче тестировать`,
  },
];

export const languages = [
  { name: "Русский", level: "Родной", percent: 100, color: "#6C63FF" },
  { name: "Английский", level: "B1 — Средний", percent: 65, color: "#00D9FF" },
];

export const education = {
  university: "ГГНТУ",
  fullName: "Грозненский государственный нефтяной технический университет",
  faculty: "Институт прикладных информационных технологий",
  specialty: "Инфокоммуникационные системы и сети связи",
  degree: "Высшее",
  year: "2024",
};

export const techOrbit = [
  { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D", orbit: 1, angle: 0 },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", orbit: 1, angle: 72 },
  { name: "React", icon: "SiReact", color: "#61DAFB", orbit: 1, angle: 144 },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", orbit: 1, angle: 216 },
  { name: "CSS3", icon: "SiCss3", color: "#1572B6", orbit: 1, angle: 288 },
  { name: "Vite", icon: "SiVite", color: "#646CFF", orbit: 2, angle: 30 },
  { name: "Git", icon: "SiGit", color: "#F05032", orbit: 2, angle: 90 },
  { name: "Pinia", icon: "SiPinia", color: "#FFD859", orbit: 2, angle: 150 },
  { name: "Vuex", icon: "SiVuedotjs", color: "#4FC08D", orbit: 2, angle: 210 },
  { name: "Axios", icon: "SiAxios", color: "#5A29E4", orbit: 2, angle: 270 },
  { name: "SCSS", icon: "SiSass", color: "#CC6699", orbit: 2, angle: 330 },
];
