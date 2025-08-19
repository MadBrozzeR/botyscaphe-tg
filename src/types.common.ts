export type True = true;
export type Integer = number;
export type Float = number;
export type InputFile = any;

export type TGBotResponse<T = any> = {
  ok: boolean;
  description?: string;
  result?: T;
  error_code?: number;
  parameters?: {
    migrate_to_chat_id?: number;
    retry_after?: number;
  };
};

