import React from 'react'

export default function AssetTable({ assets, selectedId, onSelect }) {
  return (
    <div className="panel">
      <h2>Costume Catalog</h2>
      <p className="muted">Click any item to load costume detail, tags, media, and location history.</p>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Site ID</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.asset_id}
              onClick={() => onSelect(asset)}
              style={{ background: selectedId === asset.asset_id ? '#f0f6ff' : 'transparent', cursor: 'pointer' }}
            >
              <td>{asset.public_asset_code || asset.asset_id}</td>
              <td>{asset.title || 'Untitled asset'}</td>
              <td>{asset.asset_type || '—'}</td>
              <td>{asset.status || '—'}</td>
              <td>{asset.site_id || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
