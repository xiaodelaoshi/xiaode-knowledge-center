export const site = {
  name: '小德老師知識中心',
  tagline: '把複雜的房地產、AI 與經營管理知識，整理成每個人都看得懂。',
  description: '小德老師分享房地產、稅務法律、房仲實戰、經營管理、AI、自媒體與人生觀點的個人知識中心。',
  social: {
    facebook: 'https://www.facebook.com/zhuang.xiao.de.463208?locale=zh_TW',
    instagram: '#',
    line: '#',
  },
};

export const categories = [
  { name: '房地產知識', slug: 'real-estate', icon: '屋', description: '買房、賣房、換屋與看房的實用判斷。' },
  { name: '稅務與法律', slug: 'tax-law', icon: '法', description: '用白話整理房地產稅務與常見法律問題。' },
  { name: '房仲實戰', slug: 'brokerage', icon: '談', description: '開發、委託、議價、帶看與成交經驗。' },
  { name: '經營與管理', slug: 'management', icon: '管', description: '團隊、制度、招募與領導的現場筆記。' },
  { name: 'AI與自媒體', slug: 'ai-media', icon: 'AI', description: '把 AI、內容創作與個人品牌用在工作上。' },
  { name: '親子與人生觀點', slug: 'life', icon: '心', description: '關於家庭、成長、生活與選擇的真實分享。' },
] as const;

export function categoryByName(name: string) {
  return categories.find((category) => category.name === name);
}
