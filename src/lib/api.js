import { supabase, storageBucket } from './supabase'

function pick(obj, ...keys) {
  for (const key of keys) {
    if (obj && obj[key] !== undefined && obj[key] !== null) return obj[key]
  }
  return ''
}

export async function fetchAssets() {
  const { data, error } = await supabase
    .from('asset')
    .select('*')
    .limit(250)

  if (error) throw error
  return data || []
}

export async function fetchCostumePiece(assetId) {
  const { data, error } = await supabase
    .from('costume_piece')
    .select('*')
    .eq('asset_id', assetId)
    .maybeSingle()

  if (error) throw error
  return data
}

export async function fetchAssetTags(assetId) {
  const { data, error } = await supabase
    .from('asset_tag')
    .select('*')
    .eq('asset_id', assetId)

  if (error) throw error
  return data || []
}

export async function fetchAssetMedia(assetId) {
  const { data, error } = await supabase
    .from('asset_media')
    .select('*')
    .eq('asset_id', assetId)

  if (error) throw error
  return data || []
}

export async function fetchAssetLocationHistory(assetId) {
  const { data, error } = await supabase
    .from('asset_location_history')
    .select('*')
    .eq('asset_id', assetId)
    .limit(25)

  if (error) throw error
  return data || []
}

export async function fetchStorageLocations() {
  const { data, error } = await supabase
    .from('storage_location')
    .select('*')
    .limit(200)

  if (error) throw error
  return data || []
}

export async function fetchSites() {
  const { data, error } = await supabase
    .from('site')
    .select('*')
    .limit(100)

  if (error) throw error
  return data || []
}

export async function fetchProductions() {
  const { data, error } = await supabase
    .from('production')
    .select('*')
    .limit(100)

  if (error) throw error
  return data || []
}

export async function fetchProductionAssignments() {
  const { data, error } = await supabase
    .from('production_asset_assignment')
    .select('*')
    .limit(250)

  if (error) throw error
  return data || []
}

export async function fetchLoanRequests() {
  const { data, error } = await supabase
    .from('loan_request')
    .select('*')
    .limit(100)

  if (error) throw error
  return data || []
}

export async function fetchLoanRequestLines() {
  const { data, error } = await supabase
    .from('loan_request_line')
    .select('*')
    .limit(300)

  if (error) throw error
  return data || []
}

export async function createAsset(payload) {
  const { data, error } = await supabase
    .from('asset')
    .insert(payload)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function uploadAssetImage(file, assetId) {
  const ext = file.name.split('.').pop()
  const path = `${assetId}/${Date.now()}.${ext}`

  const { error: uploadError } = await supabase.storage
    .from(storageBucket)
    .upload(path, file, { upsert: false })

  if (uploadError) throw uploadError

  const { data: publicUrlData } = supabase.storage
    .from(storageBucket)
    .getPublicUrl(path)

  const mediaPayload = {
    asset_id: assetId,
    media_url: publicUrlData?.publicUrl || '',
    media_type: file.type || 'image',
    caption: file.name
  }

  const { data, error } = await supabase
    .from('asset_media')
    .insert(mediaPayload)
    .select()

  if (error) throw error
  return data
}

export function value(obj, ...keys) {
  return pick(obj, ...keys)
}}
