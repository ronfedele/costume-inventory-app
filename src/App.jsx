import { useEffect, useMemo, useState } from 'react'
import AssetTable from './components/AssetTable'
import AssetDetail from './components/AssetDetail'
import {
  createAsset,
  fetchAssets,
  fetchAssetLocationHistory,
  fetchAssetMedia,
  fetchAssetTags,
  fetchCostumePiece,
  fetchLoanRequestLines,
  fetchLoanRequests,
  fetchProductionAssignments,
  fetchProductions,
  fetchSites,
  fetchStorageLocations,
  uploadAssetImage,
  value
} from './lib/api'

const tabs = [
  { id: 'catalog', label: 'Catalog' },
  { id: 'locations', label: 'Locations' },
  { id: 'productions', label: 'Production Pulls' },
  { id: 'loans', label: 'Loan Requests' },
  { id: 'create', label: 'Create Asset' }
]

const initialForm = {
  title: '',
  public_asset_code: '',
  asset_type: 'costume',
  status: 'available',
  description: '',
  site_id: ''
}

export default function App() {
  const [tab, setTab] = useState('catalog')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const [assets, setAssets] = useState([])
  const [sites, setSites] = useState([])
  const [locations, setLocations] = useState([])
  const [productions, setProductions] = useState([])
  const [productionAssignments, setProductionAssignments] = useState([])
  const [loanRequests, setLoanRequests] = useState([])
  const [loanLines, setLoanLines] = useState([])

  const [selectedAsset, setSelectedAsset] = useState(null)
  const [costumePiece, setCostumePiece] = useState(null)
  const [assetTags, setAssetTags] = useState([])
  const [assetMedia, setAssetMedia] = useState([])
  const [assetHistory, setAssetHistory] = useState([])

  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [form, setForm] = useState(initialForm)

  async function loadAll() {
    setLoading(true)
    setError('')
    try {
      const [
        assetsData,
        sitesData,
        locationData,
        productionData,
        assignmentData,
        loanReqData,
        loanLineData
      ] = await Promise.all([
        fetchAssets(),
        fetchSites(),
        fetchStorageLocations(),
        fetchProductions(),
        fetchProductionAssignments(),
        fetchLoanRequests(),
        fetchLoanRequestLines()
      ])

      setAssets(assetsData)
      setSites(sitesData)
      setLocations(locationData)
      setProductions(productionData)
      setProductionAssignments(assignmentData)
      setLoanRequests(loanReqData)
      setLoanLines(loanLineData)

      if (assetsData.length) {
        await loadAssetDetails(assetsData[0])
      }
    } catch (err) {
      setError(err.message || 'Unable to load data from Supabase.')
    } finally {
      setLoading(false)
    }
  }

  async function loadAssetDetails(asset) {
    setSelectedAsset(asset)
    setMessage('')
    try {
      const [piece, tags, media, history] = await Promise.all([
        fetchCostumePiece(asset.asset_id),
        fetchAssetTags(asset.asset_id),
        fetchAssetMedia(asset.asset_id),
        fetchAssetLocationHistory(asset.asset_id)
      ])
      setCostumePiece(piece)
      setAssetTags(tags)
      setAssetMedia(media)
      setAssetHistory(history)
    } catch (err) {
      setError(err.message || 'Unable to load asset details.')
    }
  }

  useEffect(() => {
    loadAll()
  }, [])

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const haystack = [
        asset.title,
        asset.public_asset_code,
        asset.asset_type,
        asset.status,
        asset.description
      ].join(' ').toLowerCase()

      const matchesSearch = haystack.includes(search.toLowerCase())
      const matchesType = typeFilter === 'all' || (asset.asset_type || '').toLowerCase() === typeFilter
      const matchesStatus = statusFilter === 'all' || (asset.status || '').toLowerCase() === statusFilter
      return matchesSearch && matchesType && matchesStatus
    })
  }, [assets, search, typeFilter, statusFilter])

  const stats = {
    totalAssets: assets.length,
    totalLocations: locations.length,
    productionAssignments: productionAssignments.length,
    openLoanRequests: loanRequests.filter((item) => String(value(item, 'status', 'request_status') || '').toLowerCase().includes('pend')).length
  }

  async function handleCreateAsset(e) {
    e.preventDefault()
    setMessage('')
    setError('')
    try {
      const created = await createAsset(form)
      setMessage('Asset created successfully.')
      setForm(initialForm)
      await loadAll()
      await loadAssetDetails(created)
      setTab('catalog')
    } catch (err) {
      setError(err.message || 'Unable to create asset.')
    }
  }

  async function handleUpload(file) {
    if (!selectedAsset) return
    setMessage('')
    setError('')
    try {
      await uploadAssetImage(file, selectedAsset.asset_id)
      setMessage('Photo uploaded successfully.')
      await loadAssetDetails(selectedAsset)
    } catch (err) {
      setError(err.message || 'Upload failed. Confirm the storage bucket exists and asset_media insert is allowed.')
    }
  }

  return (
    <div className="app-shell">
      <div className="hero">
        <div className="status">Supabase-connected theatre inventory app</div>
        <h1>Theatre Inventory Production App</h1>
        <p>
          Catalog costumes and props, view storage locations, build production pull lists,
          manage loan requests, and attach barcode tags and media.
        </p>
      </div>

      {error ? <div className="note">Error: {error}</div> : null}
      {message ? <div className="note" style={{ background: '#e8fff0', borderColor: '#b8efc8', color: '#0a5c26' }}>{message}</div> : null}

      <div className="grid-4">
        <div className="stat"><h3>Total Assets</h3><strong>{stats.totalAssets}</strong></div>
        <div className="stat"><h3>Storage Locations</h3><strong>{stats.totalLocations}</strong></div>
        <div className="stat"><h3>Production Assignments</h3><strong>{stats.productionAssignments}</strong></div>
        <div className="stat"><h3>Pending Loan Requests</h3><strong>{stats.openLoanRequests}</strong></div>
      </div>

      <div className="tabs">
        {tabs.map((item) => (
          <button
            key={item.id}
            className={`tab-button ${tab === item.id ? 'active' : ''}`}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button className="secondary" onClick={loadAll}>Refresh</button>
      </div>

      {loading ? <div className="panel">Loading data from Supabase...</div> : null}

      {!loading && tab === 'catalog' ? (
        <>
          <div className="panel">
            <div className="toolbar">
              <input placeholder="Search title, code, type, status..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="all">All types</option>
                {[...new Set(assets.map((item) => (item.asset_type || '').toLowerCase()).filter(Boolean))].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="all">All statuses</option>
                {[...new Set(assets.map((item) => (item.status || '').toLowerCase()).filter(Boolean))].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="two-col">
            <AssetTable assets={filteredAssets} selectedId={selectedAsset?.asset_id} onSelect={loadAssetDetails} />
            <AssetDetail asset={selectedAsset} costumePiece={costumePiece} tags={assetTags} media={assetMedia} history={assetHistory} onUpload={handleUpload} />
          </div>
        </>
      ) : null}

      {!loading && tab === 'locations' ? (
        <div className="panel">
          <h2>Storage Location Racks</h2>
          <p className="muted">Grouped by storage_location.</p>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Site ID</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location, idx) => (
                <tr key={location.storage_location_id || location.location_id || idx}>
                  <td>{value(location, 'location_name', 'name', 'label') || 'Unnamed location'}</td>
                  <td>{value(location, 'site_id') || '—'}</td>
                  <td>{value(location, 'description', 'notes') || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {!loading && tab === 'productions' ? (
        <div className="panel">
          <h2>Production Pull Lists</h2>
          <table>
            <thead>
              <tr>
                <th>Assignment ID</th>
                <th>Production ID</th>
                <th>Asset ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {productionAssignments.map((item, idx) => (
                <tr key={item.production_asset_assignment_id || idx}>
                  <td>{value(item, 'production_asset_assignment_id', 'assignment_id') || '—'}</td>
                  <td>{value(item, 'production_id') || '—'}</td>
                  <td>{value(item, 'asset_id') || '—'}</td>
                  <td>{value(item, 'status', 'assignment_status') || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {!loading && tab === 'loans' ? (
        <div className="panel">
          <h2>Loan Requests Between Schools</h2>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Status</th>
                <th>From Site</th>
                <th>To Site</th>
                <th>Line Count</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((request, idx) => {
                const reqId = value(request, 'loan_request_id', 'request_id')
                const lineCount = loanLines.filter((line) => String(value(line, 'loan_request_id', 'request_id')) === String(reqId)).length
                return (
                  <tr key={reqId || idx}>
                    <td>{reqId || '—'}</td>
                    <td>{value(request, 'status', 'request_status') || '—'}</td>
                    <td>{value(request, 'from_site_id', 'requesting_site_id') || '—'}</td>
                    <td>{value(request, 'to_site_id', 'fulfilling_site_id') || '—'}</td>
                    <td>{lineCount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      {!loading && tab === 'create' ? (
        <div className="panel">
          <h2>Create Asset</h2>
          <form onSubmit={handleCreateAsset}>
            <div className="form-grid">
              <div>
                <label>Title</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <label>Public Asset Code</label>
                <input value={form.public_asset_code} onChange={(e) => setForm({ ...form, public_asset_code: e.target.value })} />
              </div>
              <div>
                <label>Asset Type</label>
                <select value={form.asset_type} onChange={(e) => setForm({ ...form, asset_type: e.target.value })}>
                  <option value="costume">costume</option>
                  <option value="prop">prop</option>
                  <option value="wig">wig</option>
                  <option value="script">script</option>
                  <option value="jewelry">jewelry</option>
                </select>
              </div>
              <div>
                <label>Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                  <option value="available">available</option>
                  <option value="in_use">in_use</option>
                  <option value="on_loan">on_loan</option>
                  <option value="repair">repair</option>
                </select>
              </div>
              <div>
                <label>Site ID</label>
                <select value={form.site_id} onChange={(e) => setForm({ ...form, site_id: e.target.value })}>
                  <option value="">Select site</option>
                  {sites.map((site) => (
                    <option key={site.site_id} value={site.site_id}>
                      {value(site, 'site_name', 'name') || site.site_id}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Description</label>
                <textarea rows="4" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>
            </div>
            <div className="actions">
              <button className="primary" type="submit">Create Asset</button>
              <button className="secondary" type="button" onClick={() => setForm(initialForm)}>Reset</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  )
}
