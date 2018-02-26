import Mock from 'mockjs'

export const mockResult = Mock.mock({
  'min|100-1000': 100,
  'max|1001-100000': 1001,
  'type|1': ['压岁钱', '零花钱', '人情金', '孝敬长辈'],
  'author|1': ['stephen', 'jiajie', 'jiayong', 'son', 'daughter', 'parent'],
  'date|1': '@date("yyyy年MM月dd日")',
  'happiness|1-10': [{
    'happinessIndex|+2': 5
  }]
})

Mock.setup({
  timeout: '200'
})