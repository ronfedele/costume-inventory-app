export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      asset: {
        Row: {
          asset_id: string;
          site_id: string;
          asset_type: string;
          public_asset_code: string;
          title: string;
          description: string | null;
          current_location_id: string | null;
          lifecycle_status: string;
          condition_status: string;
          share_visibility: string;
          borrowable_flag: boolean;
          replacement_value: number | null;
          acquisition_cost: number | null;
          reserved_from: string | null;
          reserved_to: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      asset_media: {
        Row: {
          media_id: string;
          asset_id: string;
          media_type: string;
          storage_uri: string;
          caption: string | null;
          sort_order: number;
          uploaded_at: string;
        };
      };
      asset_tag: {
        Row: {
          asset_tag_id: string;
          asset_id: string;
          tag_type: string;
          tag_value: string;
          barcode_value: string | null;
          qr_value: string | null;
          printed_label_template: string | null;
          active_flag: boolean;
          created_at: string;
        };
      };
      costume_piece: {
        Row: {
          asset_id: string;
          costume_category: string | null;
          garment_type: string | null;
          character_gender_presentation: string | null;
          size_label: string | null;
          color_primary: string | null;
          period_style: string | null;
          fabric: string | null;
          brand_maker: string | null;
          dry_clean_only_flag: boolean;
          measurements_json: Json | null;
        };
      };
      prop_set_item: {
        Row: {
          asset_id: string;
          prop_category: string | null;
          set_piece_flag: boolean;
          functional_flag: boolean;
          paintable_flag: boolean;
          fragile_flag: boolean;
          quantity_mode: string;
          dimensions_json: Json | null;
        };
      };
      site: {
        Row: {
          site_id: string;
          tenant_id: string;
          site_code: string;
          site_name: string;
          site_type: string;
          active_flag: boolean;
          created_at: string;
        };
      };
      storage_location: {
        Row: {
          location_id: string;
          site_id: string;
          parent_location_id: string | null;
          location_code: string;
          location_name: string;
          location_type: string;
          visibility_level: string;
          notes: string | null;
          created_at: string;
        };
      };
      production: {
        Row: {
          production_id: string;
          site_id: string;
          production_name: string;
          production_type: string;
          season_name: string | null;
          opening_date: string | null;
          closing_date: string | null;
          status: string;
          created_at: string;
        };
      };
      production_role: {
        Row: {
          production_role_id: string;
          production_id: string;
          role_name: string;
          billing_order: number | null;
          notes: string | null;
        };
      };
      cast_assignment: {
        Row: {
          cast_assignment_id: string;
          production_role_id: string;
          cast_list_id: string | null;
          person_id: string;
          assignment_type: string;
          notes: string | null;
        };
      };
      production_asset_assignment: {
        Row: {
          production_asset_assignment_id: string;
          production_id: string;
          asset_id: string;
          production_role_id: string | null;
          cast_assignment_id: string | null;
          scene_reference: string | null;
          notes: string | null;
        };
      };
      production_ensemble_assignment: {
        Row: {
          production_ensemble_assignment_id: string;
          production_id: string;
          production_role_id: string | null;
          cast_assignment_id: string | null;
          ensemble_id: string;
          change_number: number | null;
          scene_reference: string | null;
          notes: string | null;
        };
      };
      ensemble: {
        Row: {
          ensemble_id: string;
          site_id: string;
          ensemble_name: string;
          description: string | null;
          status: string;
          created_at: string;
        };
      };
      party_person: {
        Row: {
          person_id: string;
          tenant_id: string;
          home_site_id: string | null;
          display_name: string;
          email: string | null;
          phone: string | null;
          photo_uri: string | null;
          allergies_notes: string | null;
          measurements_json: Json | null;
          active_flag: boolean;
          created_at: string;
        };
      };
      loan_request: {
        Row: {
          loan_request_id: string;
          tenant_id: string;
          requesting_site_id: string;
          fulfilling_site_id: string;
          request_number: string;
          request_status: string;
          need_by_date: string | null;
          event_context: string | null;
          production_id: string | null;
          submitted_at: string | null;
          decision_at: string | null;
          created_at: string;
        };
      };
      loan_request_line: {
        Row: {
          loan_request_line_id: string;
          loan_request_id: string;
          asset_id: string | null;
          requested_asset_type: string | null;
          requested_quantity: number;
          acceptable_substitutions_flag: boolean;
          request_notes: string | null;
          line_status: string;
        };
      };
      loan_agreement: {
        Row: {
          loan_agreement_id: string;
          loan_request_id: string;
          lender_site_id: string;
          borrower_site_id: string;
          start_date: string;
          due_date: string;
          agreement_status: string;
          created_at: string;
        };
      };
      loan_transaction: {
        Row: {
          loan_transaction_id: string;
          loan_agreement_id: string | null;
          lender_site_id: string | null;
          borrower_site_id: string | null;
          transaction_type: string;
          checkout_date: string | null;
          due_date: string | null;
          returned_date: string | null;
          transaction_status: string;
          created_at: string;
        };
      };
      loan_transaction_line: {
        Row: {
          loan_transaction_line_id: string;
          loan_transaction_id: string;
          asset_id: string;
          quantity: number;
          condition_out: string | null;
          condition_in: string | null;
          returned_flag: boolean;
          replacement_charge: number | null;
          notes: string | null;
        };
      };
      audit_event: {
        Row: {
          audit_event_id: string;
          tenant_id: string;
          site_id: string | null;
          entity_type: string;
          entity_id: string;
          action_type: string;
          occurred_at: string;
        };
      };
      lookup_value: {
        Row: {
          lookup_value_id: string;
          tenant_id: string;
          module_scope: string;
          lookup_group: string;
          value_code: string;
          value_label: string;
          sort_order: number;
          active_flag: boolean;
        };
      };
    };
  };
};
