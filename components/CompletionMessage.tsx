import React from 'react'

export function CompletionMessage() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-2xl font-bold text-gray-800 mb-2">
          学習完了！
        </p>
        <p className="text-gray-600">
          選択画面に戻ります...
        </p>
      </div>
    </div>
  )
}