import { Project } from '@/lib/microcms';

export const mockProjects: Project[] = [
  // Web Projects
  {
    id: 'web-ecommerce-platform',
    category: 'Web',
    slug: 'ecommerce-platform',
    status: 'Completed',
    timeline: '6 months',
    title: {
      vi: 'Nền tảng E-Commerce hiện đại',
      en: 'Modern E-Commerce Platform',
      jp: 'モダンなeコマースプラットフォーム',
    },
    summary: {
      vi: 'Một nền tảng thương mại điện tử đầy đủ với quản lý tồn kho thời gian thực, tích hợp thanh toán liền mạch và trải nghiệm người dùng tuyệt vời.',
      en: 'A comprehensive e-commerce platform with real-time inventory management, seamless payment integration, and exceptional user experience.',
      jp: 'リアルタイムの在庫管理、シームレスな決済統合、優れたユーザーエクスペリエンスを備えた包括的なeコマースプラットフォーム。',
    },
    challenge: {
      description: {
        vi: 'Khách hàng cần một giải pháp thương mại điện tử có thể mở rộng với khả năng xử lý hàng ngàn giao dịch đồng thời. Hệ thống cũ không thể xử lý tải cao và có nhiều vấn đề bảo mật.',
        en: 'The client needed a scalable e-commerce solution capable of handling thousands of concurrent transactions. The legacy system could not handle high traffic and had significant security issues.',
        jp: 'クライアントは数千の同時トランザクションを処理できるスケーラブルなeコマースソリューションが必要でした。従来のシステムは高トラフィックに対応できず、重大なセキュリティ問題がありました。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Chúng tôi đã xây dựng một nền tảng cloud-native sử dụng React, Node.js và PostgreSQL với caching layer Redis để hiệu suất tối ưu.',
        en: 'We built a cloud-native platform using React, Node.js, and PostgreSQL with Redis caching layer for optimal performance.',
        jp: '最適なパフォーマンスを実現するため、React、Node.js、PostgreSQLとRedisキャッシングレイヤーを使用したクラウドネイティブプラットフォームを構築しました。',
      },
      features: [
        {
          icon: '⚡',
          title: {
            vi: 'Hiệu suất cao',
            en: 'High Performance',
            jp: '高パフォーマンス',
          },
          description: {
            vi: 'Thời gian tải trang < 2 giây ngay cả với lưu lượng cao.',
            en: 'Page load times < 2 seconds even with high traffic.',
            jp: 'トラフィックが多い場合でもページ読み込み時間は2秒以下。',
          },
        },
        {
          icon: '🔒',
          title: {
            vi: 'Bảo mật nâng cao',
            en: 'Advanced Security',
            jp: '高度なセキュリティ',
          },
          description: {
            vi: 'Mã hóa end-to-end, PCI DSS compliant, và quản lý token OAuth.',
            en: 'End-to-end encryption, PCI DSS compliant, and OAuth token management.',
            jp: 'エンドツーエンド暗号化、PCI DSS準拠、OAuthトークン管理。',
          },
        },
        {
          icon: '📦',
          title: {
            vi: 'Quản lý tồn kho',
            en: 'Inventory Management',
            jp: '在庫管理',
          },
          description: {
            vi: 'Theo dõi thời gian thực của sản phẩm, tích hợp với các nhà cung cấp.',
            en: 'Real-time product tracking, integration with suppliers.',
            jp: 'リアルタイム製品追跡、サプライヤーとの統合。',
          },
        },
        {
          icon: '💳',
          title: {
            vi: 'Thanh toán đa phương',
            en: 'Multi-Payment Gateway',
            jp: '複数決済ゲートウェイ',
          },
          description: {
            vi: 'Hỗ trợ Stripe, PayPal, và các phương thức thanh toán địa phương.',
            en: 'Support for Stripe, PayPal, and local payment methods.',
            jp: 'Stripe、PayPal、およびローカル支払い方法をサポート。',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Tăng doanh thu',
          en: 'Revenue Growth',
          jp: '売上成長',
        },
        value: '+340%',
        description: {
          vi: 'trong 12 tháng đầu tiên',
          en: 'in the first 12 months',
          jp: '最初の12ヶ月間',
        },
      },
      {
        metric: {
          vi: 'Giảm cart abandonment',
          en: 'Cart Abandonment',
          jp: 'カート放棄',
        },
        value: '-45%',
        description: {
          vi: 'nhờ quy trình thanh toán tối ưu',
          en: 'thanks to optimized checkout',
          jp: 'チェックアウトの最適化のおかげ',
        },
      },
      {
        metric: {
          vi: 'Thời gian tải trang',
          en: 'Page Load Time',
          jp: 'ページ読み込み時間',
        },
        value: '1.8s',
        description: {
          vi: 'giảm từ 4.5s',
          en: 'reduced from 4.5s',
          jp: '4.5秒から削減',
        },
      },
      {
        metric: {
          vi: 'Uptime',
          en: 'Uptime',
          jp: 'アップタイム',
        },
        value: '99.9%',
        description: {
          vi: 'độ tin cậy cao',
          en: 'high reliability',
          jp: '高い信頼性',
        },
      },
    ],
    tech_stack: [
      { label: 'Web', name: 'React 18', icon: 'react' },
      { label: 'Web', name: 'Node.js', icon: 'node' },
      { label: 'Web', name: 'PostgreSQL', icon: 'postgres' },
      { label: 'Web', name: 'Redis', icon: 'redis' },
      { label: 'Web', name: 'Docker', icon: 'docker' },
    ],
    featured_in: [
      {
        id: 'featured-1',
        title: {
          vi: 'Tech Crunch',
          en: 'Tech Crunch',
          jp: 'Tech Crunch',
        },
        description: {
          vi: 'Được nhắc đến trong bài viết về các startup ecommerce tiếp theo',
          en: 'Featured in article about next-gen ecommerce startups',
          jp: 'ネクストジェンeコマーススタートアップに関する記事に掲載',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=TechCrunch',
          alt: 'Tech Crunch',
        },
        url: 'https://techcrunch.com',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'Thiết kế UI/UX',
          en: 'UI/UX Design',
          jp: 'UI/UXデザイン',
        },
        description: {
          vi: 'Tự tạo thiết kế hệ thống bao gồm 100+ thành phần tái sử dụng',
          en: 'Custom design system with 100+ reusable components',
          jp: '100以上の再利用可能なコンポーネントを含むカスタムデザインシステム',
        },
        icon: 'palette',
      },
      {
        title: {
          vi: 'Phát triển fullstack',
          en: 'Fullstack Development',
          jp: 'フルスタック開発',
        },
        description: {
          vi: 'Phát triển frontend, backend, cơ sở dữ liệu và DevOps hoàn chỉnh',
          en: 'Complete frontend, backend, database, and DevOps implementation',
          jp: 'フロントエンド、バックエンド、データベース、DevOpsの完全な実装',
        },
        icon: 'code',
      },
      {
        title: {
          vi: 'Tích hợp thanh toán',
          en: 'Payment Integration',
          jp: '決済統合',
        },
        description: {
          vi: 'Tích hợp Stripe, PayPal, và các gateway thanh toán khác',
          en: 'Stripe, PayPal, and other payment gateway integration',
          jp: 'Stripe、PayPal、その他の決済ゲートウェイの統合',
        },
        icon: 'creditcard',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=E-Commerce+Platform',
      alt: 'E-Commerce Platform',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=Dashboard',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Product+Page',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Checkout',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: 'web-saas-dashboard',
    category: 'Web',
    slug: 'saas-dashboard',
    status: 'Completed',
    timeline: '4 months',
    title: {
      vi: 'SaaS Dashboard phân tích dữ liệu',
      en: 'SaaS Analytics Dashboard',
      jp: 'SaaS分析ダッシュボード',
    },
    summary: {
      vi: 'Dashboard phân tích hiện đại cho công ty SaaS B2B với trực quan hóa dữ liệu thời gian thực và báo cáo tùy chỉnh.',
      en: 'Modern analytics dashboard for B2B SaaS company with real-time data visualization and custom reporting.',
      jp: 'リアルタイムデータの可視化とカスタムレポート機能を備えたB2B SaaS企業向けの最新分析ダッシュボード。',
    },
    challenge: {
      description: {
        vi: 'Công ty SaaS cần một dashboard có thể hiển thị hàng triệu dòng dữ liệu mà không ảnh hưởng đến hiệu suất. Các công cụ hiện có không thể đáp ứng yêu cầu tùy chỉnh báo cáo.',
        en: 'The SaaS company needed a dashboard capable of displaying millions of data rows without performance impact. Existing tools could not meet custom reporting requirements.',
        jp: 'SaaS企業はパフォーマンスに影響を与えずに数百万行のデータを表示できるダッシュボードが必要でした。既存のツールはカスタムレポート要件を満たすことができませんでした。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Xây dựng dashboard sử dụng Next.js, D3.js, và PostgreSQL với virtualization để xử lý dữ liệu lớn.',
        en: 'Built dashboard using Next.js, D3.js, and PostgreSQL with virtualization for large data handling.',
        jp: '大規模なデータ処理のため、仮想化を使用してNext.js、D3.js、PostgreSQLを使用したダッシュボードを構築しました。',
      },
      features: [
        {
          icon: '📊',
          title: {
            vi: 'Trực quan hóa dữ liệu',
            en: 'Data Visualization',
            jp: 'データ可視化',
          },
          description: {
            vi: '20+ loại biểu đồ tương tác với D3.js và Chart.js',
            en: '20+ interactive chart types with D3.js and Chart.js',
            jp: 'D3.jsとChart.jsを使用した20以上のインタラクティブなグラフタイプ',
          },
        },
        {
          icon: '⚙️',
          title: {
            vi: 'Báo cáo tùy chỉnh',
            en: 'Custom Reports',
            jp: 'カスタムレポート',
          },
          description: {
            vi: 'Người dùng có thể tạo báo cáo tùy chỉnh không cần code',
            en: 'Users can create custom reports without coding',
            jp: 'ユーザーはコード不要でカスタムレポートを作成できます',
          },
        },
        {
          icon: '🔄',
          title: {
            vi: 'Cập nhật thời gian thực',
            en: 'Real-time Updates',
            jp: 'リアルタイム更新',
          },
          description: {
            vi: 'WebSocket để cập nhật dữ liệu tức thì',
            en: 'WebSocket for instant data updates',
            jp: 'インスタントデータ更新のためのWebSocket',
          },
        },
        {
          icon: '📥',
          title: {
            vi: 'Xuất dữ liệu',
            en: 'Data Export',
            jp: 'データエクスポート',
          },
          description: {
            vi: 'Xuất CSV, Excel, PDF với định dạng tùy chỉnh',
            en: 'Export to CSV, Excel, PDF with custom formatting',
            jp: 'カスタム形式でCSV、Excel、PDFにエクスポート',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Giảm thời gian báo cáo',
          en: 'Report Time Reduced',
          jp: 'レポート時間削減',
        },
        value: '-80%',
        description: {
          vi: 'từ 2 tiếng xuống còn 15 phút',
          en: 'from 2 hours to 15 minutes',
          jp: '2時間から15分に削減',
        },
      },
      {
        metric: {
          vi: 'Độ chính xác dữ liệu',
          en: 'Data Accuracy',
          jp: 'データ精度',
        },
        value: '99.95%',
        description: {
          vi: 'tăng từ 97%',
          en: 'increased from 97%',
          jp: '97%から増加',
        },
      },
      {
        metric: {
          vi: 'Hiệu suất truy vấn',
          en: 'Query Performance',
          jp: 'クエリパフォーマンス',
        },
        value: '150ms',
        description: {
          vi: 'thời gian phản hồi trung bình',
          en: 'average response time',
          jp: '平均応答時間',
        },
      },
      {
        metric: {
          vi: 'Tài khoản nâng cấp',
          en: 'Upgrade Rate',
          jp: 'アップグレード率',
        },
        value: '+28%',
        description: {
          vi: 'khách hàng sử dụng tính năng Pro',
          en: 'customers using Pro features',
          jp: 'プロ機能を使用しているお客様',
        },
      },
    ],
    tech_stack: [
      { label: 'Web', name: 'Next.js', icon: 'nextjs' },
      { label: 'Web', name: 'TypeScript', icon: 'typescript' },
      { label: 'Web', name: 'D3.js', icon: 'd3' },
      { label: 'Web', name: 'Supabase', icon: 'supabase' },
      { label: 'Web', name: 'TailwindCSS', icon: 'tailwind' },
    ],
    featured_in: [
      {
        id: 'featured-2',
        title: {
          vi: 'Product Hunt',
          en: 'Product Hunt',
          jp: 'Product Hunt',
        },
        description: {
          vi: '#3 sản phẩm ngày trong danh mục Business',
          en: '#3 Product of the Day in Business category',
          jp: 'Business カテゴリの当日#3商品',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=ProductHunt',
          alt: 'Product Hunt',
        },
        url: 'https://producthunt.com',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'Phát triển Next.js',
          en: 'Next.js Development',
          jp: 'Next.js開発',
        },
        description: {
          vi: 'Full-stack Next.js application với SSR và optimizations',
          en: 'Full-stack Next.js with SSR and optimizations',
          jp: 'SSRと最適化を備えたフルスタックNext.js',
        },
        icon: 'rocket',
      },
      {
        title: {
          vi: 'Trực quan hóa D3',
          en: 'D3 Visualization',
          jp: 'D3可視化',
        },
        description: {
          vi: 'Các biểu đồ tùy chỉnh với D3.js và animations',
          en: 'Custom charts with D3.js and animations',
          jp: 'D3.jsとアニメーションを使用したカスタムグラフ',
        },
        icon: 'chart',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=SaaS+Dashboard',
      alt: 'SaaS Dashboard',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=Analytics+Overview',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Chart+Library',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Report+Builder',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
  // AI Projects
  {
    id: 'ai-chatbot-assistant',
    category: 'AI',
    slug: 'chatbot-assistant',
    status: 'Completed',
    timeline: '3 months',
    title: {
      vi: 'Trợ lý AI tương tác',
      en: 'AI Interactive Assistant',
      jp: 'AIインタラクティブアシスタント',
    },
    summary: {
      vi: 'Chatbot AI tích hợp xử lý ngôn ngữ tự nhiên với khả năng tìm hiểu từ tương tác người dùng, cải thiện độ chính xác theo thời gian.',
      en: 'AI chatbot with natural language processing capabilities that learns from user interactions and improves accuracy over time.',
      jp: 'ユーザーインタラクションから学習し、時間とともに精度が向上する自然言語処理機能を備えたAIチャットボット。',
    },
    challenge: {
      description: {
        vi: 'Công ty dịch vụ khách hàng cần một chatbot có thể xử lý 70% câu hỏi mà không cần tác nhân con người. Các chatbot hiện có không hiểu ngữ cảnh.',
        en: 'The customer service company needed a chatbot capable of handling 70% of inquiries without human agents. Existing chatbots lacked contextual understanding.',
        jp: 'カスタマーサービス会社は、人間のエージェントなしで70％の問い合わせに対応できるチャットボットが必要でした。既存のチャットボットには文脈的理解がありませんでした。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Phát triển chatbot sử dụng OpenAI API, LangChain để orchestration, và database vector cho semantic search.',
        en: 'Developed chatbot using OpenAI API, LangChain for orchestration, and vector database for semantic search.',
        jp: 'OpenAI API、オーケストレーション用のLangChain、セマンティック検索用のベクターデータベースを使用してチャットボットを開発しました。',
      },
      features: [
        {
          icon: '🧠',
          title: {
            vi: 'Hiểu ngữ cảnh',
            en: 'Context Understanding',
            jp: '文脈理解',
          },
          description: {
            vi: 'Nhớ lịch sử hội thoại để cung cấp câu trả lời chính xác hơn',
            en: 'Remembers conversation history for more accurate responses',
            jp: 'より正確な応答を提供するため会話履歴を記憶します',
          },
        },
        {
          icon: '🔍',
          title: {
            vi: 'Tìm kiếm ngữ nghĩa',
            en: 'Semantic Search',
            jp: 'セマンティック検索',
          },
          description: {
            vi: 'Tìm thông tin liên quan thay vì chỉ khớp từ khóa',
            en: 'Finds relevant information instead of just keyword matching',
            jp: 'キーワードマッチングだけでなく関連情報を見つけます',
          },
        },
        {
          icon: '📈',
          title: {
            vi: 'Học tập liên tục',
            en: 'Continuous Learning',
            jp: '継続学習',
          },
          description: {
            vi: 'Cập nhật mô hình từ các tương tác mới hàng ngày',
            en: 'Updates model from new interactions daily',
            jp: '毎日新しいインタラクションからモデルを更新します',
          },
        },
        {
          icon: '🌍',
          title: {
            vi: 'Đa ngôn ngữ',
            en: 'Multilingual',
            jp: '多言語対応',
          },
          description: {
            vi: 'Hỗ trợ 15+ ngôn ngữ với dịch tự động',
            en: 'Supports 15+ languages with automatic translation',
            jp: '自動翻訳機能で15以上の言語をサポート',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Xử lý tự động',
          en: 'Automation Rate',
          jp: '自動化率',
        },
        value: '78%',
        description: {
          vi: 'câu hỏi không cần tác nhân',
          en: 'inquiries without human agents',
          jp: '人間のエージェントなしで問い合わせ',
        },
      },
      {
        metric: {
          vi: 'Thời gian phản hồi',
          en: 'Response Time',
          jp: '応答時間',
        },
        value: '< 1s',
        description: {
          vi: 'phản hồi trong 1 giây',
          en: 'responses within 1 second',
          jp: '1秒以内に応答',
        },
      },
      {
        metric: {
          vi: 'Độ hài lòng khách',
          en: 'Customer Satisfaction',
          jp: 'カスタマー満足度',
        },
        value: '4.6/5',
        description: {
          vi: 'xếp hạng từ người dùng cuối',
          en: 'rating from end users',
          jp: 'エンドユーザーからの評価',
        },
      },
      {
        metric: {
          vi: 'Tiết kiệm chi phí',
          en: 'Cost Savings',
          jp: 'コスト削減',
        },
        value: '65%',
        description: {
          vi: 'giảm chi phí hỗ trợ khách hàng',
          en: 'reduction in support costs',
          jp: 'サポートコスト削減',
        },
      },
    ],
    tech_stack: [
      { label: 'AI', name: 'Python', icon: 'python' },
      { label: 'AI', name: 'OpenAI API', icon: 'openai' },
      { label: 'AI', name: 'LangChain', icon: 'langchain' },
      { label: 'AI', name: 'Pinecone', icon: 'pinecone' },
      { label: 'AI', name: 'FastAPI', icon: 'fastapi' },
    ],
    featured_in: [
      {
        id: 'featured-3',
        title: {
          vi: 'AI News',
          en: 'AI Weekly',
          jp: 'AI Weekly',
        },
        description: {
          vi: 'Được nhắc đến trong bài báo về chatbot tiên tiến nhất',
          en: 'Featured in article about state-of-the-art chatbots',
          jp: '最先端のチャットボットに関する記事に掲載',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=AIWeekly',
          alt: 'AI Weekly',
        },
        url: 'https://aiweekly.com',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'Phát triển AI',
          en: 'AI Development',
          jp: 'AI開発',
        },
        description: {
          vi: 'Model fine-tuning, prompt engineering, vector database integration',
          en: 'Model fine-tuning, prompt engineering, vector DB integration',
          jp: 'モデル微調整、プロンプトエンジニアリング、ベクターDB統合',
        },
        icon: 'brain',
      },
      {
        title: {
          vi: 'Backend FastAPI',
          en: 'FastAPI Backend',
          jp: 'FastAPIバックエンド',
        },
        description: {
          vi: 'High-performance API cho xử lý yêu cầu AI',
          en: 'High-performance API for AI request processing',
          jp: 'AIリクエスト処理用の高性能API',
        },
        icon: 'zap',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=AI+Chatbot',
      alt: 'AI Chatbot',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=Chatbot+Interface',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Conversation+Flow',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Analytics+Panel',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: 'ai-recommendation-engine',
    category: 'AI',
    slug: 'recommendation-engine',
    status: 'Completed',
    timeline: '5 months',
    title: {
      vi: 'Engine gợi ý sản phẩm AI',
      en: 'AI Recommendation Engine',
      jp: 'AI推奨エンジン',
    },
    summary: {
      vi: 'Engine gợi ý dựa trên AI sử dụng collaborative filtering và machine learning để tăng doanh số bán hàng.',
      en: 'AI-powered recommendation engine using collaborative filtering and machine learning to boost sales.',
      jp: 'コラボレーティブフィルタリングと機械学習を使用した販売を促進するAI推奨エンジン。',
    },
    challenge: {
      description: {
        vi: 'Nền tảng e-commerce cần tăng AOV (Average Order Value) bằng gợi ý cá nhân hóa. Phương pháp thủ công hiện tại không phù hợp.',
        en: 'E-commerce platform needed to increase AOV through personalized recommendations. Current manual methods were ineffective.',
        jp: 'eコマースプラットフォームは個別化された推奨事項を通じてAOVを増やす必要がありました。現在の手動方法は効果的ではありませんでした。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Phát triển engine khuyến nghị sử dụng Matrix Factorization, Content-based filtering, và Real-time personalization.',
        en: 'Developed recommendation engine using Matrix Factorization, Content-based filtering, and Real-time personalization.',
        jp: '行列因数分解、コンテンツベースフィルタリング、およびリアルタイム個別化を使用して推奨エンジンを開発しました。',
      },
      features: [
        {
          icon: '👤',
          title: {
            vi: 'Cá nhân hóa thời gian thực',
            en: 'Real-time Personalization',
            jp: 'リアルタイム個別化',
          },
          description: {
            vi: 'Cập nhật gợi ý dựa trên hành vi người dùng tức thì',
            en: 'Updates recommendations based on instant user behavior',
            jp: 'ユーザーの即座の行動に基づいて推奨事項を更新します',
          },
        },
        {
          icon: '🔗',
          title: {
            vi: 'Collaborative Filtering',
            en: 'Collaborative Filtering',
            jp: 'コラボレーティブフィルタリング',
          },
          description: {
            vi: 'Tìm người dùng tương tự để gợi ý sản phẩm tương tự',
            en: 'Finds similar users to recommend similar products',
            jp: '同じ製品を推奨するために同様のユーザーを見つけます',
          },
        },
        {
          icon: '🏷️',
          title: {
            vi: 'Gợi ý dựa trên nội dung',
            en: 'Content-based Filtering',
            jp: 'コンテンツベースフィルタリング',
          },
          description: {
            vi: 'Sử dụng đặc tính sản phẩm để gợi ý tương tự',
            en: 'Uses product features to recommend similar items',
            jp: '製品機能を使用して同様のアイテムを推奨します',
          },
        },
        {
          icon: '📊',
          title: {
            vi: 'Phân tích A/B',
            en: 'A/B Testing',
            jp: 'A/Bテスト',
          },
          description: {
            vi: 'Kiểm tra các chiến lược gợi ý khác nhau để tối ưu',
            en: 'Test different recommendation strategies for optimization',
            jp: '最適化のためにさまざまな推奨戦略をテストします',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Tăng AOV',
          en: 'AOV Increase',
          jp: 'AOV増加',
        },
        value: '+32%',
        description: {
          vi: 'giá trị đơn hàng trung bình',
          en: 'average order value',
          jp: '平均注文価値',
        },
      },
      {
        metric: {
          vi: 'CTR gợi ý',
          en: 'Recommendation CTR',
          jp: '推奨CTR',
        },
        value: '18.5%',
        description: {
          vi: 'tỷ lệ nhấp qua trên gợi ý',
          en: 'click-through rate on recommendations',
          jp: '推奨事項のクリック率',
        },
      },
      {
        metric: {
          vi: 'Doanh số bán hàng',
          en: 'Sales from Recommendations',
          jp: '推奨から販売',
        },
        value: '23%',
        description: {
          vi: 'từ các sản phẩm được gợi ý',
          en: 'from recommended products',
          jp: '推奨製品から',
        },
      },
      {
        metric: {
          vi: 'Độ chính xác',
          en: 'Accuracy Score',
          jp: '精度スコア',
        },
        value: '91.2%',
        description: {
          vi: 'độ chính xác của gợi ý',
          en: 'recommendation accuracy',
          jp: '推奨精度',
        },
      },
    ],
    tech_stack: [
      { label: 'AI', name: 'Python', icon: 'python' },
      { label: 'AI', name: 'Scikit-learn', icon: 'sklearn' },
      { label: 'AI', name: 'TensorFlow', icon: 'tensorflow' },
      { label: 'AI', name: 'PostgreSQL', icon: 'postgres' },
      { label: 'AI', name: 'Redis', icon: 'redis' },
    ],
    featured_in: [
      {
        id: 'featured-4',
        title: {
          vi: 'Machine Learning Mastery',
          en: 'ML Mastery',
          jp: 'ML Mastery',
        },
        description: {
          vi: 'Case study về xây dựng recommendation system',
          en: 'Case study on building recommendation systems',
          jp: '推奨システム構築に関するケーススタディ',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=MLMastery',
          alt: 'ML Mastery',
        },
        url: 'https://mlmastery.com',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'ML Engineering',
          en: 'ML Engineering',
          jp: 'ML エンジニアリング',
        },
        description: {
          vi: 'Model development, training, evaluation, và production deployment',
          en: 'Model development, training, evaluation, and deployment',
          jp: 'モデル開発、トレーニング、評価、およびデプロイメント',
        },
        icon: 'processor',
      },
      {
        title: {
          vi: 'Data Engineering',
          en: 'Data Engineering',
          jp: 'データエンジニアリング',
        },
        description: {
          vi: 'Data pipeline, feature engineering, và data warehousing',
          en: 'Data pipeline, feature engineering, warehousing',
          jp: 'データパイプライン、特徴エンジニアリング、ウェアハウジング',
        },
        icon: 'database',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=Recommendation+Engine',
      alt: 'Recommendation Engine',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=Recommendation+Results',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Model+Performance',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=User+Behavior',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
  // DATA Projects
  {
    id: 'data-analytics-platform',
    category: 'DATA',
    slug: 'analytics-platform',
    status: 'Completed',
    timeline: '7 months',
    title: {
      vi: 'Nền tảng phân tích dữ liệu lớn',
      en: 'Big Data Analytics Platform',
      jp: 'ビッグデータ分析プラットフォーム',
    },
    summary: {
      vi: 'Nền tảng phân tích dữ liệu lớn xử lý hàng tỷ dòng dữ liệu mỗi ngày với độ trễ thấp và độ chính xác cao.',
      en: 'Big data analytics platform processing billions of data rows daily with low latency and high accuracy.',
      jp: '毎日数十億行のデータを低遅延と高精度で処理するビッグデータ分析プラットフォーム。',
    },
    challenge: {
      description: {
        vi: 'Công ty công nghệ cần xử lý và phân tích dữ liệu từ hàng triệu thiết bị IoT. Các giải pháp truyền thống không thể mở rộng và quá chậm.',
        en: 'Tech company needed to process and analyze data from millions of IoT devices. Traditional solutions could not scale and were too slow.',
        jp: '技術系企業は数百万のIoTデバイスからのデータを処理および分析する必要がありました。従来のソリューションはスケーリングできず、遅すぎました。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Xây dựng nền tảng sử dụng Apache Spark, Kafka, Hadoop để xử lý dữ liệu phân tán và real-time.',
        en: 'Built platform using Apache Spark, Kafka, and Hadoop for distributed and real-time data processing.',
        jp: '分散およびリアルタイムのデータ処理のためにApache Spark、Kafka、Hadoopを使用してプラットフォームを構築しました。',
      },
      features: [
        {
          icon: '⚡',
          title: {
            vi: 'Xử lý streaming',
            en: 'Stream Processing',
            jp: 'ストリーム処理',
          },
          description: {
            vi: 'Xử lý dữ liệu thời gian thực từ Kafka với Spark Streaming',
            en: 'Real-time data processing from Kafka with Spark Streaming',
            jp: 'Spark StreamingでKafkaからリアルタイムデータ処理',
          },
        },
        {
          icon: '🔄',
          title: {
            vi: 'Batch processing',
            en: 'Batch Processing',
            jp: 'バッチ処理',
          },
          description: {
            vi: 'Xử lý hàng loạt lớn với Spark jobs trên cluster Hadoop',
            en: 'Large-scale batch processing with Spark jobs on Hadoop',
            jp: 'HadoopでのSparkジョブを使用した大規模バッチ処理',
          },
        },
        {
          icon: '📊',
          title: {
            vi: 'Data Warehouse',
            en: 'Data Warehouse',
            jp: 'データウェアハウス',
          },
          description: {
            vi: 'Hive tables tối ưu cho truy vấn nhanh và phân tích OLAP',
            en: 'Optimized Hive tables for fast queries and OLAP analysis',
            jp: '高速クエリとOLAP分析用に最適化されたHiveテーブル',
          },
        },
        {
          icon: '🔐',
          title: {
            vi: 'Bảo mật dữ liệu',
            en: 'Data Security',
            jp: 'データセキュリティ',
          },
          description: {
            vi: 'Encryption, access control, và audit logging cho compliance',
            en: 'Encryption, access control, audit logging for compliance',
            jp: 'コンプライアンス用の暗号化、アクセス制御、監査ログ',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Xử lý dữ liệu',
          en: 'Data Throughput',
          jp: 'データスループット',
        },
        value: '2.5B/day',
        description: {
          vi: 'dòng dữ liệu mỗi ngày',
          en: 'rows per day',
          jp: '1日あたりの行',
        },
      },
      {
        metric: {
          vi: 'Độ trễ truy vấn',
          en: 'Query Latency',
          jp: 'クエリレイテンシ',
        },
        value: '< 5s',
        description: {
          vi: 'cho các truy vấn 99 phần trăm',
          en: 'for 99th percentile queries',
          jp: '99パーセンタイルクエリの場合',
        },
      },
      {
        metric: {
          vi: 'Chi phí lưu trữ',
          en: 'Storage Cost',
          jp: 'ストレージコスト',
        },
        value: '-55%',
        description: {
          vi: 'giảm với compression',
          en: 'reduction with compression',
          jp: '圧縮による削減',
        },
      },
      {
        metric: {
          vi: 'Khoảng thời gian',
          en: 'Availability',
          jp: '可用性',
        },
        value: '99.95%',
        description: {
          vi: 'độ tin cậy cao',
          en: 'high reliability',
          jp: '高い信頼性',
        },
      },
    ],
    tech_stack: [
      { label: 'DATA', name: 'Apache Spark', icon: 'spark' },
      { label: 'DATA', name: 'Kafka', icon: 'kafka' },
      { label: 'DATA', name: 'Hadoop', icon: 'hadoop' },
      { label: 'DATA', name: 'Hive', icon: 'hive' },
      { label: 'DATA', name: 'Scala', icon: 'scala' },
    ],
    featured_in: [
      {
        id: 'featured-5',
        title: {
          vi: 'Data Engineering Weekly',
          en: 'DE Weekly',
          jp: 'DE Weekly',
        },
        description: {
          vi: 'Featured case study về xây dựng platform xử lý dữ liệu lớn',
          en: 'Case study on building big data processing platform',
          jp: 'ビッグデータ処理プラットフォーム構築に関するケーススタディ',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=DEWeekly',
          alt: 'Data Engineering Weekly',
        },
        url: 'https://deweekly.com',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'Data Pipeline',
          en: 'Data Pipeline',
          jp: 'データパイプライン',
        },
        description: {
          vi: 'ETL/ELT pipeline từ nguồn đến data warehouse',
          en: 'ETL/ELT pipeline from sources to warehouse',
          jp: 'ソースからウェアハウスへのETL/ELTパイプライン',
        },
        icon: 'flow',
      },
      {
        title: {
          vi: 'Data Modeling',
          en: 'Data Modeling',
          jp: 'データモデリング',
        },
        description: {
          vi: 'Star schema, dimensional modeling cho OLAP',
          en: 'Star schema and dimensional modeling for OLAP',
          jp: 'OLAPスター スキーマと次元モデリング',
        },
        icon: 'diagram',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=Analytics+Platform',
      alt: 'Analytics Platform',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=Data+Flow+Architecture',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Cluster+Management',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Query+Performance',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: 'data-ml-platform',
    category: 'DATA',
    slug: 'ml-platform',
    status: 'Completed',
    timeline: '6 months',
    title: {
      vi: 'Nền tảng ML Pipeline Tự động',
      en: 'Automated ML Pipeline Platform',
      jp: '自動化されたMLパイプラインプラットフォーム',
    },
    summary: {
      vi: 'Nền tảng tự động hóa quy trình xây dựng mô hình machine learning từ chuẩn bị dữ liệu đến triển khai production.',
      en: 'Automated platform for ML model building pipeline from data preparation to production deployment.',
      jp: 'データ準備から本番環境のデプロイメントまでのML モデル構築パイプラインを自動化するプラットフォーム。',
    },
    challenge: {
      description: {
        vi: 'Công ty fintech cần xây dựng nhiều mô hình ML nhanh chóng nhưng không có đủ ML engineers. Quy trình thủ công tốn thời gian và dễ lỗi.',
        en: 'Fintech company needed to build multiple ML models quickly but lacked ML engineers. Manual process was time-consuming and error-prone.',
        jp: 'フィンテック企業は複数のMLモデルをすばやく構築する必要がありましたが、MLエンジニアが不足していました。手動プロセスは時間がかかり、エラーが発生しやすかったです。',
      },
    },
    solution: {
      type: 'features',
      description: {
        vi: 'Phát triển nền tảng sử dụng Airflow để orchestration, MLflow để tracking, và AutoML cho model selection.',
        en: 'Developed platform using Airflow for orchestration, MLflow for tracking, AutoML for model selection.',
        jp: 'オーケストレーション用のAirflow、追跡用のMLflow、モデル選択用のAutoMLを使用してプラットフォームを開発しました。',
      },
      features: [
        {
          icon: '🔄',
          title: {
            vi: 'Automated Pipeline',
            en: 'Automated Pipeline',
            jp: '自動パイプライン',
          },
          description: {
            vi: 'Airflow DAG tự động theo lịch xây dựng mô hình mới',
            en: 'Airflow DAG automatically schedules model building',
            jp: 'Airflow DAGが自動的にモデル構築をスケジュール',
          },
        },
        {
          icon: '🧪',
          title: {
            vi: 'Experiment Tracking',
            en: 'Experiment Tracking',
            jp: '実験追跡',
          },
          description: {
            vi: 'MLflow theo dõi tất cả experiments và metrics',
            en: 'MLflow tracks all experiments and metrics',
            jp: 'MLflowがすべての実験とメトリクスを追跡',
          },
        },
        {
          icon: '🤖',
          title: {
            vi: 'AutoML',
            en: 'AutoML',
            jp: 'AutoML',
          },
          description: {
            vi: 'Tự động chọn model tốt nhất từ hyperparameter tuning',
            en: 'Automatically selects best model via hyperparameter tuning',
            jp: 'ハイパーパラメータチューニングを通じて最適なモデルを自動的に選択',
          },
        },
        {
          icon: '📈',
          title: {
            vi: 'Model Monitoring',
            en: 'Model Monitoring',
            jp: 'モデル監視',
          },
          description: {
            vi: 'Giám sát model drift và retraining tự động khi cần',
            en: 'Monitor model drift and auto-retrain when needed',
            jp: 'モデルドリフトを監視し、必要に応じて自動的に再トレーニング',
          },
        },
      ],
    },
    impact: [
      {
        metric: {
          vi: 'Thời gian xây dựng',
          en: 'Build Time',
          jp: 'ビルド時間',
        },
        value: '-75%',
        description: {
          vi: 'giảm từ 4 tuần xuống 1 tuần',
          en: 'reduced from 4 weeks to 1 week',
          jp: '4週間から1週間に削減',
        },
      },
      {
        metric: {
          vi: 'Model Accuracy',
          en: 'Model Accuracy',
          jp: 'モデル精度',
        },
        value: '+8%',
        description: {
          vi: 'tăng từ hyperparameter tuning tự động',
          en: 'improvement from auto hyperparameter tuning',
          jp: '自動ハイパーパラメータチューニングからの改善',
        },
      },
      {
        metric: {
          vi: 'Non-ML Engineers',
          en: 'Models by Non-ML',
          jp: '非ML人員',
        },
        value: '40%',
        description: {
          vi: 'mô hình xây dựng bởi data analysts',
          en: 'models built by data analysts',
          jp: 'データアナリストが構築したモデル',
        },
      },
      {
        metric: {
          vi: 'Model Stability',
          en: 'Model Stability',
          jp: 'モデル安定性',
        },
        value: '99.2%',
        description: {
          vi: 'uptime của models trong production',
          en: 'uptime of production models',
          jp: '本番環境モデルのアップタイム',
        },
      },
    ],
    tech_stack: [
      { label: 'DATA', name: 'Apache Airflow', icon: 'airflow' },
      { label: 'DATA', name: 'MLflow', icon: 'mlflow' },
      { label: 'DATA', name: 'Python', icon: 'python' },
      { label: 'DATA', name: 'Scikit-learn', icon: 'sklearn' },
      { label: 'DATA', name: 'PostgreSQL', icon: 'postgres' },
    ],
    featured_in: [
      {
        id: 'featured-6',
        title: {
          vi: 'MLOps Community',
          en: 'MLOps.community',
          jp: 'MLOps.community',
        },
        description: {
          vi: 'Được chia sẻ trong cộng đồng MLOps là best practice',
          en: 'Shared in MLOps community as best practice',
          jp: 'MLOpsコミュニティでベストプラクティスとして共有',
        },
        image: {
          url: 'https://via.placeholder.com/300x200?text=MLOps',
          alt: 'MLOps Community',
        },
        url: 'https://mlops.community',
      },
    ],
    services_provided: [
      {
        title: {
          vi: 'MLOps Engineering',
          en: 'MLOps Engineering',
          jp: 'MLOpsエンジニアリング',
        },
        description: {
          vi: 'Pipeline automation, model deployment, monitoring',
          en: 'Pipeline automation, model deployment, monitoring',
          jp: 'パイプラインの自動化、モデルのデプロイメント、監視',
        },
        icon: 'settings',
      },
      {
        title: {
          vi: 'Infrastructure Setup',
          en: 'Infrastructure',
          jp: 'インフラストラクチャ',
        },
        description: {
          vi: 'Kubernetes, Docker, CI/CD pipelines cho ML',
          en: 'Kubernetes, Docker, CI/CD for ML workflows',
          jp: 'KubernetesおよびDockerおよびMLワークフロー用CI/CD',
        },
        icon: 'server',
      },
    ],
    thumbnail: {
      url: 'https://via.placeholder.com/1200x600?text=ML+Platform',
      alt: 'ML Platform',
    },
    project_assets: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/1200x600?text=ML+Pipeline+Architecture',
        display_size: 'full',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Model+Versioning',
        display_size: 'half',
      },
      {
        type: 'image',
        url: 'https://via.placeholder.com/590x400?text=Model+Deployment',
        display_size: 'half',
      },
    ],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    publishedAt: '2024-01-15T00:00:00.000Z',
    revisedAt: '2024-01-15T00:00:00.000Z',
  },
];
