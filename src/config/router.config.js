
const Home = () => import('../views/home/index')
const About = () => import('../views/about/index')
const Report = () => import('../views/report/index')
const Answer = () => import('../views/answer')
const QuestionInfo = () => import('../views/answer/question-info')
const Article = () => import('../views/article/index')
const ArticleRead = () => import('../views/article/article-read')
const ArticleUpdate = () => import('../views/article/article-update')
const Chat = () => import('../views/chat')
const Classes = () => import('../views/classes')
const Statistics = () => import('../views/statistics')
const Task = () => import('../views/tasknotice/index')
const Reply = () => import('../views/tasknotice/reply')
const Register = () => import('../views/register/index')
const NotFoundComponent = () => import('../views/exception/404')
const Search = () => import('../views/search/index')
const Create = () => import('../views/create/index')
const Video = () => import('../views/video/index')
const Details = () => import('../views/tasknotice/task/task-details')
const TeacherReply = () => import('../views/tasknotice/task/task-reply')

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    mate: {
      title: '主页',
      icon: 'home',
      isLoading: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    mate: {
      isLoading: false
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    mate: {
      title: '报告',
      icon: 'book',
      isLoading: false
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    mate: {
      title: '会议',
      icon: 'schedule',
      isLoading: false
    }
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes,
    mate: {
      title: '班级',
      icon: 'usergroup-add',
      isLoading: false
    }
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer,
    mate: {
      title: '论坛交流',
      icon: 'bulb',
      isLoading: true
    }
  },
  {
    path: '/questionInfo/:id',
    name: 'Question',
    component: QuestionInfo,
    mate: {
      title: '问题详情',
      icon: 'book',
      isLoading: false
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    mate: {
      title: '阅读中心',
      icon: 'book',
      isLoading: true
    }
  },
  {
    path: '/articleRead/:id',
    name: 'ArticleRead',
    component: ArticleRead,
    mate: {
      title: '阅读文章',
      icon: 'book',
      isLoading: false
    }
  },
  {
    path: '/articleUpdate/:id',
    name: 'ArticleUpdate',
    component: ArticleUpdate,
    mate: {
      title: '编辑文章',
      icon: 'book',
      isLoading: false
    }
  },
  {
    path: '/create/index',
    name: 'Create',
    component: Create,
    mate: {
      title: '创作中心',
      isLoading: false
    }
  },
  {
    path: '/search/index',
    name: 'Search',
    component: Search,
    mate: {
      title: '搜索',
      icon: 'search',
      isLoading: false
    }
  },
  {
    path: '/tasknotice',
    name: 'Task',
    component: Task,
    mate: {
      title: '任务',
      icon: 'sound',
      isLoading: false
    }
  },
  {
    path: '/details',
    name: 'details',
    component: Details,
    mate: {
      title: '任务详情',
      icon: 'sound',
      isLoading: false
    }
  },
  {
    path: '/tilltill/:videoId',
    name: 'TillTill',
    component: Video,
    mate: {
      title: 'TillTill',
      icon: 'sound',
      isLoading: false
    }
  },
  {
    path: '/reply',
    name: 'reply',
    component: Reply,
    mate: {
      title: '任务回复',
      icon: 'sound',
      isLoading: false
    }
  },
  {
    path: '/teacherreply',
    name: 'teacherreply',
    component: TeacherReply,
    mate: {
      title: '任务回复',
      icon: 'sound',
      isLoading: false
    }
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
    mate: {
      title: '数据统计',
      icon: 'bar-chart',
      isLoading: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    mate: {
      title: '关于',
      icon: 'question-circle',
      isLoading: false
    }
  },
  {
    path: '/passwordReset',
    name: 'passwordReset',
    component: () => import('../views/register/passwordReset'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/403',
    name: '403',
    component: () => import('../views/exception/403'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/500',
    name: '500',
    component: () => import('../views/exception/500'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/404',
    name: '404',
    component: NotFoundComponent,
    mate: {
      isLoading: false
    }
  }
]
