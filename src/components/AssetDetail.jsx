import React from 'react'
import { value } from '../lib/api'

export default function AssetDetail({ asset, costumePiece, tags, media, history, onUpload }) {
  if (!asset) {
    return (
      <div className="panel">
        <h2>Asset Details</h2>
        <p className="muted">Choose an asset from the catalog to load details.</p>
      </div>
    )
  }

  return (
    <div className="panel">
      <h2>{asset.title || 'Untitled asset'}</h2>
      <div className="detail-box">
        <div className="kv"><strong>Asset code</strong><span>{asset.public_asset_code || asset.asset_id}</span></div>
        <div className="kv"><strong>Type</strong><span>{asset.asset_type || '—'}</span></div>
        <div className="kv"><strong>Status</strong><span>{asset.status || '—'}</span></div>
        <div className="kv"><strong>Site ID</strong><span>{asset.site_id || '—'}</span></div>
        <div className="kv"><strong>Description</strong><span>{asset.description || '—'}</span></div>
      </div>

      <div className="detail-box">
        <h4>Costume Piece</h4>
        {costumePiece ? (
          <>
            <div className="kv"><strong>Size</strong><span>{value(costumePiece, 'size_label', 'size', 'garment_size') || '—'}</span></div>
            <div className="kv"><strong>Color</strong><span>{value(costumePiece, 'color', 'primary_color') || '—'}</span></div>
            <div className="kv"><strong>Era</strong><span>{value(costumePiece, 'period', 'era_label', 'era') || '—'}</span></div>
            <div className="kv"><strong>Gender use</strong><span>{value(costumePiece, 'gender_presentation', 'gender_use') || '—'}</span></div>
          </>
        ) : (
          <p className="muted">No matching costume_piece row found for this asset.</p>
        )}
      </div>

      <div className="detail-box">
        <h4>Barcode / Tags</h4>
        {tags.length ? tags.map((tag, idx) => (
          <div key={tag.asset_tag_id || tag.tag_id || idx} className="kv">
            <strong>{value(tag, 'tag_type', 'barcode_type', 'type') || 'Tag'}</strong>
            <span>{value(tag, 'tag_value', 'barcode_value', 'tag_code', 'value') || '—'}</span>
          </div>
        )) : <p className="muted">No tags recorded.</p>}
      </div>

      <div className="detail-box">
        <h4>Photos</h4>
        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} />
        <div className="media-grid" style={{ marginTop: '12px' }}>
          {media.length ? media.map((item, idx) => {
            const url = value(item, 'media_url', 'public_url', 'url')
            return (
              <div className="media-card" key={item.asset_media_id || item.media_id || idx}>
                {url ? <img src={url} alt={item.caption || 'Asset media'} /> : <div style={{ padding: 12 }}>No preview URL</div>}
                <div>{item.caption || item.file_name || 'Asset image'}</div>
              </div>
            )
          }) : <p className="muted">No photos attached.</p>}
        </div>
      </div>

      <div className="detail-box">
        <h4>Location History</h4>
        {history.length ? history.map((item, idx) => (
          <div key={item.asset_location_history_id || idx} style={{ padding: '8px 0', borderBottom: idx < history.length - 1 ? '1px solid #eef2f6' : 'none' }}>
            <div><strong>{value(item, 'event_type', 'movement_type', 'status') || 'Location event'}</strong></div>
            <div className="muted">{value(item, 'notes', 'description') || 'No notes'}</div>
          </div>
        )) : <p className="muted">No location history found.</p>}
      </div>
    </div>
  )
}
