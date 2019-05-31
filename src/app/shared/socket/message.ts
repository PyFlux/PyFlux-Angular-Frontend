export interface Message {
    id: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    message?: string;
    read_status?: string;
    read_times?: string;
    status: string;
    created_by?: string;
    updated_by?: string;
    from_user: string;
    to_user: string;
}