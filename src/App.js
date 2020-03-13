import React from 'react'
import AppRouter from './pages/router'

function App() {
  return (
    <div>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}

      <AppRouter></AppRouter>
    </div>
  )
}

export default App