export type Asset = {
  asset_id: string;
  title: string;
  asset_type: string;
  lifecycle_status?: string | null;
  condition_status?: string | null;
  public_asset_code?: string | null;
  borrowable_flag?: boolean | null;
};

export type CostumeRow = Asset & {
  costume_piece?: {
    garment_type?: string | null;
    size_label?: string | null;
    color_primary?: string | null;
    period_style?: string | null;
  } | null;
};

export type Production = {
  production_id: string;
  production_name: string;
  production_type?: string | null;
  status?: string | null;
};

export type Person = {
  person_id: string;
  display_name: string;
  email?: string | null;
};

export type LoanRequest = {
  loan_request_id: string;
  request_number: string;
  request_status?: string | null;
  event_context?: string | null;
};
