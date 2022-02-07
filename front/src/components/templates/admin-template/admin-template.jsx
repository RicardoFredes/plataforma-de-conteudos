export default function AdminTemplate({ children }) {
  return (
    <div className="admin-template">
      <div className="container">
        {children}
      </div>
    </div>
  )
}
