import React from 'react'
import AppRouter from './pages/router'
import { BrowserRouter } from 'react-router-dom'

function App(props) {
  return (
    <div>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}

export default App