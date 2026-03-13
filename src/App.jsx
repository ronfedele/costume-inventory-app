
import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"

export default function App() {
  const [assets, setAssets] = useState([])

  useEffect(() => {
    loadAssets()
  }, [])

  async function loadAssets() {
    const { data, error } = await supabase
      .from("asset")
      .select("*")
      .limit(50)

    if (!error) setAssets(data || [])
  }

  return (
    <div style={{fontFamily:"Arial", padding:"40px"}}>
      <h1>Costume Inventory</h1>
      <p>Connected to Supabase</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(a => (
            <tr key={a.asset_id}>
              <td>{a.asset_id}</td>
              <td>{a.title}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
