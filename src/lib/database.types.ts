export interface Database {
  public: {
    Tables: {
      vc_profiles: {
        Row: {
          id: string
          user_id: string
          firm_name: string
          firm_size: string
          investment_focus: string[]
          ticket_size_min: number
          ticket_size_max: number
          stage_preference: string[]
          industry_preference: string[]
          geography_preference: string[]
          email_alias: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          firm_name: string
          firm_size: string
          investment_focus: string[]
          ticket_size_min: number
          ticket_size_max: number
          stage_preference: string[]
          industry_preference: string[]
          geography_preference: string[]
          email_alias?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          firm_name?: string
          firm_size?: string
          investment_focus?: string[]
          ticket_size_min?: number
          ticket_size_max?: number
          stage_preference?: string[]
          industry_preference?: string[]
          geography_preference?: string[]
          email_alias?: string
          updated_at?: string
        }
      }
      startup_pitches: {
        Row: {
          id: string
          vc_profile_id: string
          company_name: string
          founder_name: string
          founder_email: string
          pitch_subject: string
          pitch_content: string
          extracted_data: Record<string, unknown>
          status: 'pending' | 'in_progress' | 'completed' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          vc_profile_id: string
          company_name: string
          founder_name: string
          founder_email: string
          pitch_subject: string
          pitch_content: string
          extracted_data?: Record<string, any>
          status?: 'pending' | 'in_progress' | 'completed' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          vc_profile_id?: string
          company_name?: string
          founder_name?: string
          founder_email?: string
          pitch_subject?: string
          pitch_content?: string
          extracted_data?: Record<string, any>
          status?: 'pending' | 'in_progress' | 'completed' | 'rejected'
          updated_at?: string
        }
      }
      interviews: {
        Row: {
          id: string
          pitch_id: string
          conversation_data: Record<string, unknown>
          voice_recording_url: string | null
          status: 'pending' | 'in_progress' | 'completed'
          started_at: string | null
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          pitch_id: string
          conversation_data?: Record<string, any>
          voice_recording_url?: string | null
          status?: 'pending' | 'in_progress' | 'completed'
          started_at?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          pitch_id?: string
          conversation_data?: Record<string, any>
          voice_recording_url?: string | null
          status?: 'pending' | 'in_progress' | 'completed'
          started_at?: string | null
          completed_at?: string | null
          updated_at?: string
        }
      }
      scoring_reports: {
        Row: {
          id: string
          pitch_id: string
          interview_id: string | null
          overall_score: number
          market_score: number
          team_score: number
          product_score: number
          traction_score: number
          financials_score: number
          fit_score: number
          analysis: Record<string, unknown>
          recommendation: 'strong_pass' | 'pass' | 'maybe' | 'no'
          generated_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          pitch_id: string
          interview_id?: string | null
          overall_score: number
          market_score: number
          team_score: number
          product_score: number
          traction_score: number
          financials_score: number
          fit_score: number
          analysis: Record<string, unknown>
          recommendation: 'strong_pass' | 'pass' | 'maybe' | 'no'
          generated_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          pitch_id?: string
          interview_id?: string | null
          overall_score?: number
          market_score?: number
          team_score?: number
          product_score?: number
          traction_score?: number
          financials_score?: number
          fit_score?: number
          analysis?: Record<string, any>
          recommendation?: 'strong_pass' | 'pass' | 'maybe' | 'no'
          generated_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}