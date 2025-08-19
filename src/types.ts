import { Integer, True, Float } from './types.common';

/**
* This object represents an incoming update.At most one of the optional parameters can be present in
* any given update.
*/
export type Update = {
  update_id: Integer; // The update&#39;s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you&#39;re using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
  message?: Message; // Optional. New incoming message of any kind - text, photo, sticker, etc.
  edited_message?: Message; // Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
  channel_post?: Message; // Optional. New incoming channel post of any kind - text, photo, sticker, etc.
  edited_channel_post?: Message; // Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
  business_connection?: BusinessConnection; // Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
  business_message?: Message; // Optional. New message from a connected business account
  edited_business_message?: Message; // Optional. New version of a message from a connected business account
  deleted_business_messages?: BusinessMessagesDeleted; // Optional. Messages were deleted from a connected business account
  message_reaction?: MessageReactionUpdated; // Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify &quot;message_reaction&quot; in the list of allowed_updates to receive these updates. The update isn&#39;t received for reactions set by bots.
  message_reaction_count?: MessageReactionCountUpdated; // Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify &quot;message_reaction_count&quot; in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
  inline_query?: InlineQuery; // Optional. New incoming inline query
  chosen_inline_result?: ChosenInlineResult; // Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
  callback_query?: CallbackQuery; // Optional. New incoming callback query
  shipping_query?: ShippingQuery; // Optional. New incoming shipping query. Only for invoices with flexible price
  pre_checkout_query?: PreCheckoutQuery; // Optional. New incoming pre-checkout query. Contains full information about checkout
  purchased_paid_media?: PaidMediaPurchased; // Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
  poll?: Poll; // Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
  poll_answer?: PollAnswer; // Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
  my_chat_member?: ChatMemberUpdated; // Optional. The bot&#39;s chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
  chat_member?: ChatMemberUpdated; // Optional. A chat member&#39;s status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify &quot;chat_member&quot; in the list of allowed_updates to receive these updates.
  chat_join_request?: ChatJoinRequest; // Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
  chat_boost?: ChatBoostUpdated; // Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
  removed_chat_boost?: ChatBoostRemoved; // Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
};

/**
* Describes the current status of a webhook.
*/
export type WebhookInfo = {
  url: string; // Webhook URL, may be empty if webhook is not set up
  has_custom_certificate: boolean; // True, if a custom certificate was provided for webhook certificate checks
  pending_update_count: Integer; // Number of updates awaiting delivery
  ip_address?: string; // Optional. Currently used webhook IP address
  last_error_date?: Integer; // Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
  last_error_message?: string; // Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
  last_synchronization_error_date?: Integer; // Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
  max_connections?: Integer; // Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
  allowed_updates?: string[]; // Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
};

/**
* This object represents a Telegram user or bot.
*/
export type User = {
  id: Integer; // Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
  is_bot: boolean; // True, if this user is a bot
  first_name: string; // User&#39;s or bot&#39;s first name
  last_name?: string; // Optional. User&#39;s or bot&#39;s last name
  username?: string; // Optional. User&#39;s or bot&#39;s username
  language_code?: string; // Optional. IETF language tag of the user&#39;s language
  is_premium?: True; // Optional. True, if this user is a Telegram Premium user
  added_to_attachment_menu?: True; // Optional. True, if this user added the bot to the attachment menu
  can_join_groups?: boolean; // Optional. True, if the bot can be invited to groups. Returned only in getMe.
  can_read_all_group_messages?: boolean; // Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
  supports_inline_queries?: boolean; // Optional. True, if the bot supports inline queries. Returned only in getMe.
  can_connect_to_business?: boolean; // Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
  has_main_web_app?: boolean; // Optional. True, if the bot has a main Web App. Returned only in getMe.
};

/**
* This object represents a chat.
*/
export type Chat = {
  id: Integer; // Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
  type: 'private' | 'group' | 'supergroup' | 'channel'; // Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
  title?: string; // Optional. Title, for supergroups, channels and group chats
  username?: string; // Optional. Username, for private chats, supergroups and channels if available
  first_name?: string; // Optional. First name of the other party in a private chat
  last_name?: string; // Optional. Last name of the other party in a private chat
  is_forum?: True; // Optional. True, if the supergroup chat is a forum (has topics enabled)
  is_direct_messages?: True; // Optional. True, if the chat is the direct messages chat of a channel
};

/**
* This object contains full information about a chat.
*/
export type ChatFullInfo = {
  id: Integer; // Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
  type: 'private' | 'group' | 'supergroup' | 'channel'; // Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
  title?: string; // Optional. Title, for supergroups, channels and group chats
  username?: string; // Optional. Username, for private chats, supergroups and channels if available
  first_name?: string; // Optional. First name of the other party in a private chat
  last_name?: string; // Optional. Last name of the other party in a private chat
  is_forum?: True; // Optional. True, if the supergroup chat is a forum (has topics enabled)
  is_direct_messages?: True; // Optional. True, if the chat is the direct messages chat of a channel
  accent_color_id: Integer; // Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.
  max_reaction_count: Integer; // The maximum number of reactions that can be set on a message in the chat
  photo?: ChatPhoto; // Optional. Chat photo
  active_usernames?: string[]; // Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels
  birthdate?: Birthdate; // Optional. For private chats, the date of birth of the user
  business_intro?: BusinessIntro; // Optional. For private chats with business accounts, the intro of the business
  business_location?: BusinessLocation; // Optional. For private chats with business accounts, the location of the business
  business_opening_hours?: BusinessOpeningHours; // Optional. For private chats with business accounts, the opening hours of the business
  personal_chat?: Chat; // Optional. For private chats, the personal channel of the user
  parent_chat?: Chat; // Optional. Information about the corresponding channel chat; for direct messages chats only
  available_reactions?: ReactionType[]; // Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.
  background_custom_emoji_id?: string; // Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
  profile_accent_color_id?: Integer; // Optional. Identifier of the accent color for the chat&#39;s profile background. See profile accent colors for more details.
  profile_background_custom_emoji_id?: string; // Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background
  emoji_status_custom_emoji_id?: string; // Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
  emoji_status_expiration_date?: Integer; // Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
  bio?: string; // Optional. Bio of the other party in a private chat
  has_private_forwards?: True; // Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=&lt;user_id&gt; links only in chats with the user
  has_restricted_voice_and_video_messages?: True; // Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
  join_to_send_messages?: True; // Optional. True, if users need to join the supergroup before they can send messages
  join_by_request?: True; // Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
  description?: string; // Optional. Description, for groups, supergroups and channel chats
  invite_link?: string; // Optional. Primary invite link, for groups, supergroups and channel chats
  pinned_message?: Message; // Optional. The most recent pinned message (by sending date)
  permissions?: ChatPermissions; // Optional. Default chat member permissions, for groups and supergroups
  accepted_gift_types: AcceptedGiftTypes; // Information about types of gifts that are accepted by the chat or by the corresponding user for private chats
  can_send_paid_media?: True; // Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
  slow_mode_delay?: Integer; // Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
  unrestrict_boost_count?: Integer; // Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions
  message_auto_delete_time?: Integer; // Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds
  has_aggressive_anti_spam_enabled?: True; // Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.
  has_hidden_members?: True; // Optional. True, if non-administrators can only get the list of bots and administrators in the chat
  has_protected_content?: True; // Optional. True, if messages from the chat can&#39;t be forwarded to other chats
  has_visible_history?: True; // Optional. True, if new chat members will have access to old messages; available only to chat administrators
  sticker_set_name?: string; // Optional. For supergroups, name of the group sticker set
  can_set_sticker_set?: True; // Optional. True, if the bot can change the group sticker set
  custom_emoji_sticker_set_name?: string; // Optional. For supergroups, the name of the group&#39;s custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
  linked_chat_id?: Integer; // Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
  location?: ChatLocation; // Optional. For supergroups, the location to which the supergroup is connected
};

/**
* This object represents a message.
*/
export type Message = {
  message_id: Integer; // Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
  message_thread_id?: Integer; // Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
  direct_messages_topic?: DirectMessagesTopic; // Optional. Information about the direct messages chat topic that contains the message
  from?: User; // Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
  sender_chat?: Chat; // Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel&#39;s discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
  sender_boost_count?: Integer; // Optional. If the sender of the message boosted the chat, the number of boosts added by the user
  sender_business_bot?: User; // Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.
  date: Integer; // Date the message was sent in Unix time. It is always a positive number, representing a valid date.
  business_connection_id?: string; // Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
  chat: Chat; // Chat the message belongs to
  forward_origin?: MessageOrigin; // Optional. Information about the original message for forwarded messages
  is_topic_message?: True; // Optional. True, if the message is sent to a forum topic
  is_automatic_forward?: True; // Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
  reply_to_message?: Message; // Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
  external_reply?: ExternalReplyInfo; // Optional. Information about the message that is being replied to, which may come from another chat or forum topic
  quote?: TextQuote; // Optional. For replies that quote part of the original message, the quoted part of the message
  reply_to_story?: Story; // Optional. For replies to a story, the original story
  reply_to_checklist_task_id?: Integer; // Optional. Identifier of the specific checklist task that is being replied to
  via_bot?: User; // Optional. Bot through which the message was sent
  edit_date?: Integer; // Optional. Date the message was last edited in Unix time
  has_protected_content?: True; // Optional. True, if the message can&#39;t be forwarded
  is_from_offline?: True; // Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
  is_paid_post?: True; // Optional. True, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can&#39;t be edited.
  media_group_id?: string; // Optional. The unique identifier of a media message group this message belongs to
  author_signature?: string; // Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
  paid_star_count?: Integer; // Optional. The number of Telegram Stars that were paid by the sender of the message to send it
  text?: string; // Optional. For text messages, the actual UTF-8 text of the message
  entities?: MessageEntity[]; // Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
  link_preview_options?: LinkPreviewOptions; // Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed
  suggested_post_info?: SuggestedPostInfo; // Optional. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can&#39;t be edited.
  effect_id?: string; // Optional. Unique identifier of the message effect added to the message
  animation?: Animation; // Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
  audio?: Audio; // Optional. Message is an audio file, information about the file
  document?: Document; // Optional. Message is a general file, information about the file
  paid_media?: PaidMediaInfo; // Optional. Message contains paid media; information about the paid media
  photo?: PhotoSize[]; // Optional. Message is a photo, available sizes of the photo
  sticker?: Sticker; // Optional. Message is a sticker, information about the sticker
  story?: Story; // Optional. Message is a forwarded story
  video?: Video; // Optional. Message is a video, information about the video
  video_note?: VideoNote; // Optional. Message is a video note, information about the video message
  voice?: Voice; // Optional. Message is a voice message, information about the file
  caption?: string; // Optional. Caption for the animation, audio, document, paid media, photo, video or voice
  caption_entities?: MessageEntity[]; // Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
  show_caption_above_media?: True; // Optional. True, if the caption must be shown above the message media
  has_media_spoiler?: True; // Optional. True, if the message media is covered by a spoiler animation
  checklist?: Checklist; // Optional. Message is a checklist
  contact?: Contact; // Optional. Message is a shared contact, information about the contact
  dice?: Dice; // Optional. Message is a dice with random value
  game?: Game; // Optional. Message is a game, information about the game. More about games »
  poll?: Poll; // Optional. Message is a native poll, information about the poll
  venue?: Venue; // Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
  location?: Location; // Optional. Message is a shared location, information about the location
  new_chat_members?: User[]; // Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
  left_chat_member?: User; // Optional. A member was removed from the group, information about them (this member may be the bot itself)
  new_chat_title?: string; // Optional. A chat title was changed to this value
  new_chat_photo?: PhotoSize[]; // Optional. A chat photo was change to this value
  delete_chat_photo?: True; // Optional. Service message: the chat photo was deleted
  group_chat_created?: True; // Optional. Service message: the group has been created
  supergroup_chat_created?: True; // Optional. Service message: the supergroup has been created. This field can&#39;t be received in a message coming through updates, because bot can&#39;t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
  channel_chat_created?: True; // Optional. Service message: the channel has been created. This field can&#39;t be received in a message coming through updates, because bot can&#39;t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged; // Optional. Service message: auto-delete timer settings changed in the chat
  migrate_to_chat_id?: Integer; // Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
  migrate_from_chat_id?: Integer; // Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
  pinned_message?: MaybeInaccessibleMessage; // Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
  invoice?: Invoice; // Optional. Message is an invoice for a payment, information about the invoice. More about payments »
  successful_payment?: SuccessfulPayment; // Optional. Message is a service message about a successful payment, information about the payment. More about payments »
  refunded_payment?: RefundedPayment; // Optional. Message is a service message about a refunded payment, information about the payment. More about payments »
  users_shared?: UsersShared; // Optional. Service message: users were shared with the bot
  chat_shared?: ChatShared; // Optional. Service message: a chat was shared with the bot
  gift?: GiftInfo; // Optional. Service message: a regular gift was sent or received
  unique_gift?: UniqueGiftInfo; // Optional. Service message: a unique gift was sent or received
  connected_website?: string; // Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
  write_access_allowed?: WriteAccessAllowed; // Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess
  passport_data?: PassportData; // Optional. Telegram Passport data
  proximity_alert_triggered?: ProximityAlertTriggered; // Optional. Service message. A user in the chat triggered another user&#39;s proximity alert while sharing Live Location.
  boost_added?: ChatBoostAdded; // Optional. Service message: user boosted the chat
  chat_background_set?: ChatBackground; // Optional. Service message: chat background set
  checklist_tasks_done?: ChecklistTasksDone; // Optional. Service message: some tasks in a checklist were marked as done or not done
  checklist_tasks_added?: ChecklistTasksAdded; // Optional. Service message: tasks were added to a checklist
  direct_message_price_changed?: DirectMessagePriceChanged; // Optional. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed
  forum_topic_created?: ForumTopicCreated; // Optional. Service message: forum topic created
  forum_topic_edited?: ForumTopicEdited; // Optional. Service message: forum topic edited
  forum_topic_closed?: ForumTopicClosed; // Optional. Service message: forum topic closed
  forum_topic_reopened?: ForumTopicReopened; // Optional. Service message: forum topic reopened
  general_forum_topic_hidden?: GeneralForumTopicHidden; // Optional. Service message: the &#39;General&#39; forum topic hidden
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden; // Optional. Service message: the &#39;General&#39; forum topic unhidden
  giveaway_created?: GiveawayCreated; // Optional. Service message: a scheduled giveaway was created
  giveaway?: Giveaway; // Optional. The message is a scheduled giveaway message
  giveaway_winners?: GiveawayWinners; // Optional. A giveaway with public winners was completed
  giveaway_completed?: GiveawayCompleted; // Optional. Service message: a giveaway without public winners was completed
  paid_message_price_changed?: PaidMessagePriceChanged; // Optional. Service message: the price for paid messages has changed in the chat
  suggested_post_approved?: SuggestedPostApproved; // Optional. Service message: a suggested post was approved
  suggested_post_approval_failed?: SuggestedPostApprovalFailed; // Optional. Service message: approval of a suggested post has failed
  suggested_post_declined?: SuggestedPostDeclined; // Optional. Service message: a suggested post was declined
  suggested_post_paid?: SuggestedPostPaid; // Optional. Service message: payment for a suggested post was received
  suggested_post_refunded?: SuggestedPostRefunded; // Optional. Service message: payment for a suggested post was refunded
  video_chat_scheduled?: VideoChatScheduled; // Optional. Service message: video chat scheduled
  video_chat_started?: VideoChatStarted; // Optional. Service message: video chat started
  video_chat_ended?: VideoChatEnded; // Optional. Service message: video chat ended
  video_chat_participants_invited?: VideoChatParticipantsInvited; // Optional. Service message: new participants invited to a video chat
  web_app_data?: WebAppData; // Optional. Service message: data sent by a Web App
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
};

/**
* This object represents a unique message identifier.
*/
export type MessageId = {
  message_id: Integer; // Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
};

/**
* This object describes a message that was deleted or is otherwise inaccessible to the bot.
*/
export type InaccessibleMessage = {
  chat: Chat; // Chat the message belonged to
  message_id: Integer; // Unique message identifier inside the chat
  date: Integer; // Always 0. The field can be used to differentiate regular and inaccessible messages.
};

/**
* This object describes a message that can be inaccessible to the bot. It can be one of
*/
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;

/**
* This object represents one special entity in a text message. For example, hashtags, usernames,
* URLs, etc.
*/
export type MessageEntity = {
  type: 'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'blockquote' | 'expandable_blockquote' | 'code' | 'pre' | 'text_link' | 'text_mention' | 'custom_emoji'; // Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag or #hashtag@chatusername), “cashtag” ($USD or $USD@chatusername), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)
  offset: Integer; // Offset in UTF-16 code units to the start of the entity
  length: Integer; // Length of the entity in UTF-16 code units
  url?: string; // Optional. For “text_link” only, URL that will be opened after user taps on the text
  user?: User; // Optional. For “text_mention” only, the mentioned user
  language?: string; // Optional. For “pre” only, the programming language of the entity text
  custom_emoji_id?: string; // Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
};

/**
* This object contains information about the quoted part of a message that is replied to by the
* given message.
*/
export type TextQuote = {
  text: string; // Text of the quoted part of a message that is replied to by the given message
  entities?: MessageEntity[]; // Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.
  position: Integer; // Approximate quote position in the original message in UTF-16 code units as specified by the sender
  is_manual?: True; // Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
};

/**
* This object contains information about a message that is being replied to, which may come from
* another chat or forum topic.
*/
export type ExternalReplyInfo = {
  origin: MessageOrigin; // Origin of the message replied to by the given message
  chat?: Chat; // Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
  message_id?: Integer; // Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
  link_preview_options?: LinkPreviewOptions; // Optional. Options used for link preview generation for the original message, if it is a text message
  animation?: Animation; // Optional. Message is an animation, information about the animation
  audio?: Audio; // Optional. Message is an audio file, information about the file
  document?: Document; // Optional. Message is a general file, information about the file
  paid_media?: PaidMediaInfo; // Optional. Message contains paid media; information about the paid media
  photo?: PhotoSize[]; // Optional. Message is a photo, available sizes of the photo
  sticker?: Sticker; // Optional. Message is a sticker, information about the sticker
  story?: Story; // Optional. Message is a forwarded story
  video?: Video; // Optional. Message is a video, information about the video
  video_note?: VideoNote; // Optional. Message is a video note, information about the video message
  voice?: Voice; // Optional. Message is a voice message, information about the file
  has_media_spoiler?: True; // Optional. True, if the message media is covered by a spoiler animation
  checklist?: Checklist; // Optional. Message is a checklist
  contact?: Contact; // Optional. Message is a shared contact, information about the contact
  dice?: Dice; // Optional. Message is a dice with random value
  game?: Game; // Optional. Message is a game, information about the game. More about games »
  giveaway?: Giveaway; // Optional. Message is a scheduled giveaway, information about the giveaway
  giveaway_winners?: GiveawayWinners; // Optional. A giveaway with public winners was completed
  invoice?: Invoice; // Optional. Message is an invoice for a payment, information about the invoice. More about payments »
  location?: Location; // Optional. Message is a shared location, information about the location
  poll?: Poll; // Optional. Message is a native poll, information about the poll
  venue?: Venue; // Optional. Message is a venue, information about the venue
};

/**
* Describes reply parameters for the message that is being sent.
*/
export type ReplyParameters = {
  message_id: Integer; // Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified
  chat_id?: Integer | string; // Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account and messages from channel direct messages chats.
  allow_sending_without_reply?: boolean; // Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
  quote?: string; // Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn&#39;t found in the original message.
  quote_parse_mode?: string; // Optional. Mode for parsing entities in the quote. See formatting options for more details.
  quote_entities?: MessageEntity[]; // Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.
  quote_position?: Integer; // Optional. Position of the quote in the original message in UTF-16 code units
  checklist_task_id?: Integer; // Optional. Identifier of the specific checklist task to be replied to
};

/**
* This object describes the origin of a message. It can be one of
*/
export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;

/**
* The message was originally sent by a known user.
*/
export type MessageOriginUser = {
  type: 'user'; // Type of the message origin, always “user”
  date: Integer; // Date the message was sent originally in Unix time
  sender_user: User; // User that sent the message originally
};

/**
* The message was originally sent by an unknown user.
*/
export type MessageOriginHiddenUser = {
  type: 'hidden_user'; // Type of the message origin, always “hidden_user”
  date: Integer; // Date the message was sent originally in Unix time
  sender_user_name: string; // Name of the user that sent the message originally
};

/**
* The message was originally sent on behalf of a chat to a group chat.
*/
export type MessageOriginChat = {
  type: 'chat'; // Type of the message origin, always “chat”
  date: Integer; // Date the message was sent originally in Unix time
  sender_chat: Chat; // Chat that sent the message originally
  author_signature?: string; // Optional. For messages originally sent by an anonymous chat administrator, original message author signature
};

/**
* The message was originally sent to a channel chat.
*/
export type MessageOriginChannel = {
  type: 'channel'; // Type of the message origin, always “channel”
  date: Integer; // Date the message was sent originally in Unix time
  chat: Chat; // Channel chat to which the message was originally sent
  message_id: Integer; // Unique message identifier inside the chat
  author_signature?: string; // Optional. Signature of the original post author
};

/**
* This object represents one size of a photo or a file / sticker thumbnail.
*/
export type PhotoSize = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  width: Integer; // Photo width
  height: Integer; // Photo height
  file_size?: Integer; // Optional. File size in bytes
};

/**
* This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
*/
export type Animation = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  width: Integer; // Video width as defined by the sender
  height: Integer; // Video height as defined by the sender
  duration: Integer; // Duration of the video in seconds as defined by the sender
  thumbnail?: PhotoSize; // Optional. Animation thumbnail as defined by the sender
  file_name?: string; // Optional. Original animation filename as defined by the sender
  mime_type?: string; // Optional. MIME type of the file as defined by the sender
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
};

/**
* This object represents an audio file to be treated as music by the Telegram clients.
*/
export type Audio = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  duration: Integer; // Duration of the audio in seconds as defined by the sender
  performer?: string; // Optional. Performer of the audio as defined by the sender or by audio tags
  title?: string; // Optional. Title of the audio as defined by the sender or by audio tags
  file_name?: string; // Optional. Original filename as defined by the sender
  mime_type?: string; // Optional. MIME type of the file as defined by the sender
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
  thumbnail?: PhotoSize; // Optional. Thumbnail of the album cover to which the music file belongs
};

/**
* This object represents a general file (as opposed to photos, voice messages and audio files).
*/
export type Document = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  thumbnail?: PhotoSize; // Optional. Document thumbnail as defined by the sender
  file_name?: string; // Optional. Original filename as defined by the sender
  mime_type?: string; // Optional. MIME type of the file as defined by the sender
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
};

/**
* This object represents a story.
*/
export type Story = {
  chat: Chat; // Chat that posted the story
  id: Integer; // Unique identifier for the story in the chat
};

/**
* This object represents a video file.
*/
export type Video = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  width: Integer; // Video width as defined by the sender
  height: Integer; // Video height as defined by the sender
  duration: Integer; // Duration of the video in seconds as defined by the sender
  thumbnail?: PhotoSize; // Optional. Video thumbnail
  cover?: PhotoSize[]; // Optional. Available sizes of the cover of the video in the message
  start_timestamp?: Integer; // Optional. Timestamp in seconds from which the video will play in the message
  file_name?: string; // Optional. Original filename as defined by the sender
  mime_type?: string; // Optional. MIME type of the file as defined by the sender
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
};

/**
* This object represents a video message (available in Telegram apps as of v.4.0).
*/
export type VideoNote = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  length: Integer; // Video width and height (diameter of the video message) as defined by the sender
  duration: Integer; // Duration of the video in seconds as defined by the sender
  thumbnail?: PhotoSize; // Optional. Video thumbnail
  file_size?: Integer; // Optional. File size in bytes
};

/**
* This object represents a voice note.
*/
export type Voice = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  duration: Integer; // Duration of the audio in seconds as defined by the sender
  mime_type?: string; // Optional. MIME type of the file as defined by the sender
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
};

/**
* Describes the paid media added to a message.
*/
export type PaidMediaInfo = {
  star_count: Integer; // The number of Telegram Stars that must be paid to buy access to the media
  paid_media: PaidMedia[]; // Information about the paid media
};

/**
* This object describes paid media. Currently, it can be one of
*/
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

/**
* The paid media isn&#39;t available before the payment.
*/
export type PaidMediaPreview = {
  type: 'preview'; // Type of the paid media, always “preview”
  width?: Integer; // Optional. Media width as defined by the sender
  height?: Integer; // Optional. Media height as defined by the sender
  duration?: Integer; // Optional. Duration of the media in seconds as defined by the sender
};

/**
* The paid media is a photo.
*/
export type PaidMediaPhoto = {
  type: 'photo'; // Type of the paid media, always “photo”
  photo: PhotoSize[]; // The photo
};

/**
* The paid media is a video.
*/
export type PaidMediaVideo = {
  type: 'video'; // Type of the paid media, always “video”
  video: Video; // The video
};

/**
* This object represents a phone contact.
*/
export type Contact = {
  phone_number: string; // Contact&#39;s phone number
  first_name: string; // Contact&#39;s first name
  last_name?: string; // Optional. Contact&#39;s last name
  user_id?: Integer; // Optional. Contact&#39;s user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
  vcard?: string; // Optional. Additional data about the contact in the form of a vCard
};

/**
* This object represents an animated emoji that displays a random value.
*/
export type Dice = {
  emoji: string; // Emoji on which the dice throw animation is based
  value: Integer; // Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
};

/**
* This object contains information about one answer option in a poll.
*/
export type PollOption = {
  text: string; // Option text, 1-100 characters
  text_entities?: MessageEntity[]; // Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
  voter_count: Integer; // Number of users that voted for this option
};

/**
* This object contains information about one answer option in a poll to be sent.
*/
export type InputPollOption = {
  text: string; // Option text, 1-100 characters
  text_parse_mode?: string; // Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
  text_entities?: MessageEntity[]; // Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode
};

/**
* This object represents an answer of a user in a non-anonymous poll.
*/
export type PollAnswer = {
  poll_id: string; // Unique poll identifier
  voter_chat?: Chat; // Optional. The chat that changed the answer to the poll, if the voter is anonymous
  user?: User; // Optional. The user that changed the answer to the poll, if the voter isn&#39;t anonymous
  option_ids: Integer[]; // 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
};

/**
* This object contains information about a poll.
*/
export type Poll = {
  id: string; // Unique poll identifier
  question: string; // Poll question, 1-300 characters
  question_entities?: MessageEntity[]; // Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
  options: PollOption[]; // List of poll options
  total_voter_count: Integer; // Total number of users that voted in the poll
  is_closed: boolean; // True, if the poll is closed
  is_anonymous: boolean; // True, if the poll is anonymous
  type: 'regular' | 'quiz'; // Poll type, currently can be “regular” or “quiz”
  allows_multiple_answers: boolean; // True, if the poll allows multiple answers
  correct_option_id?: Integer; // Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
  explanation?: string; // Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
  explanation_entities?: MessageEntity[]; // Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
  open_period?: Integer; // Optional. Amount of time in seconds the poll will be active after creation
  close_date?: Integer; // Optional. Point in time (Unix timestamp) when the poll will be automatically closed
};

/**
* Describes a task in a checklist.
*/
export type ChecklistTask = {
  id: Integer; // Unique identifier of the task
  text: string; // Text of the task
  text_entities?: MessageEntity[]; // Optional. Special entities that appear in the task text
  completed_by_user?: User; // Optional. User that completed the task; omitted if the task wasn&#39;t completed
  completion_date?: Integer; // Optional. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn&#39;t completed
};

/**
* Describes a checklist.
*/
export type Checklist = {
  title: string; // Title of the checklist
  title_entities?: MessageEntity[]; // Optional. Special entities that appear in the checklist title
  tasks: ChecklistTask[]; // List of tasks in the checklist
  others_can_add_tasks?: True; // Optional. True, if users other than the creator of the list can add tasks to the list
  others_can_mark_tasks_as_done?: True; // Optional. True, if users other than the creator of the list can mark tasks as done or not done
};

/**
* Describes a task to add to a checklist.
*/
export type InputChecklistTask = {
  id: Integer; // Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist
  text: string; // Text of the task; 1-100 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the text. See formatting options for more details.
  text_entities?: MessageEntity[]; // Optional. List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
};

/**
* Describes a checklist to create.
*/
export type InputChecklist = {
  title: string; // Title of the checklist; 1-255 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the title. See formatting options for more details.
  title_entities?: MessageEntity[]; // Optional. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
  tasks: InputChecklistTask[]; // List of 1-30 tasks in the checklist
  others_can_add_tasks?: boolean; // Optional. Pass True if other users can add tasks to the checklist
  others_can_mark_tasks_as_done?: boolean; // Optional. Pass True if other users can mark tasks as done or not done in the checklist
};

/**
* Describes a service message about checklist tasks marked as done or not done.
*/
export type ChecklistTasksDone = {
  checklist_message?: Message; // Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  marked_as_done_task_ids?: Integer[]; // Optional. Identifiers of the tasks that were marked as done
  marked_as_not_done_task_ids?: Integer[]; // Optional. Identifiers of the tasks that were marked as not done
};

/**
* Describes a service message about tasks added to a checklist.
*/
export type ChecklistTasksAdded = {
  checklist_message?: Message; // Optional. Message containing the checklist to which the tasks were added. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  tasks: ChecklistTask[]; // List of tasks added to the checklist
};

/**
* This object represents a point on the map.
*/
export type Location = {
  latitude: Float; // Latitude as defined by the sender
  longitude: Float; // Longitude as defined by the sender
  horizontal_accuracy?: Float; // Optional. The radius of uncertainty for the location, measured in meters; 0-1500
  live_period?: Integer; // Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
  heading?: Integer; // Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
  proximity_alert_radius?: Integer; // Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
};

/**
* This object represents a venue.
*/
export type Venue = {
  location: Location; // Venue location. Can&#39;t be a live location
  title: string; // Name of the venue
  address: string; // Address of the venue
  foursquare_id?: string; // Optional. Foursquare identifier of the venue
  foursquare_type?: string; // Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  google_place_id?: string; // Optional. Google Places identifier of the venue
  google_place_type?: string; // Optional. Google Places type of the venue. (See supported types.)
};

/**
* Describes data sent from a Web App to the bot.
*/
export type WebAppData = {
  data: string; // The data. Be aware that a bad client can send arbitrary data in this field.
  button_text: string; // Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
};

/**
* This object represents the content of a service message, sent whenever a user in the chat triggers
* a proximity alert set by another user.
*/
export type ProximityAlertTriggered = {
  traveler: User; // User that triggered the alert
  watcher: User; // User that set the alert
  distance: Integer; // The distance between the users
};

/**
* This object represents a service message about a change in auto-delete timer settings.
*/
export type MessageAutoDeleteTimerChanged = {
  message_auto_delete_time: Integer; // New auto-delete time for messages in the chat; in seconds
};

/**
* This object represents a service message about a user boosting a chat.
*/
export type ChatBoostAdded = {
  boost_count: Integer; // Number of boosts added by the user
};

/**
* This object describes the way a background is filled based on the selected colors. Currently, it
* can be one of
*/
export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;

/**
* The background is filled using the selected color.
*/
export type BackgroundFillSolid = {
  type: 'solid'; // Type of the background fill, always “solid”
  color: Integer; // The color of the background fill in the RGB24 format
};

/**
* The background is a gradient fill.
*/
export type BackgroundFillGradient = {
  type: 'gradient'; // Type of the background fill, always “gradient”
  top_color: Integer; // Top color of the gradient in the RGB24 format
  bottom_color: Integer; // Bottom color of the gradient in the RGB24 format
  rotation_angle: Integer; // Clockwise rotation angle of the background fill in degrees; 0-359
};

/**
* The background is a freeform gradient that rotates after every message in the chat.
*/
export type BackgroundFillFreeformGradient = {
  type: 'freeform_gradient'; // Type of the background fill, always “freeform_gradient”
  colors: Integer[]; // A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
};

/**
* This object describes the type of a background. Currently, it can be one of
*/
export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper | BackgroundTypePattern | BackgroundTypeChatTheme;

/**
* The background is automatically filled based on the selected colors.
*/
export type BackgroundTypeFill = {
  type: 'fill'; // Type of the background, always “fill”
  fill: BackgroundFill; // The background fill
  dark_theme_dimming: Integer; // Dimming of the background in dark themes, as a percentage; 0-100
};

/**
* The background is a wallpaper in the JPEG format.
*/
export type BackgroundTypeWallpaper = {
  type: 'wallpaper'; // Type of the background, always “wallpaper”
  document: Document; // Document with the wallpaper
  dark_theme_dimming: Integer; // Dimming of the background in dark themes, as a percentage; 0-100
  is_blurred?: True; // Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
  is_moving?: True; // Optional. True, if the background moves slightly when the device is tilted
};

/**
* The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x
* -tgwallpattern”) pattern to be combined with the background fill chosen by the user.
*/
export type BackgroundTypePattern = {
  type: 'pattern'; // Type of the background, always “pattern”
  document: Document; // Document with the pattern
  fill: BackgroundFill; // The background fill that is combined with the pattern
  intensity: Integer; // Intensity of the pattern when it is shown above the filled background; 0-100
  is_inverted?: True; // Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
  is_moving?: True; // Optional. True, if the background moves slightly when the device is tilted
};

/**
* The background is taken directly from a built-in chat theme.
*/
export type BackgroundTypeChatTheme = {
  type: 'chat_theme'; // Type of the background, always “chat_theme”
  theme_name: string; // Name of the chat theme, which is usually an emoji
};

/**
* This object represents a chat background.
*/
export type ChatBackground = {
  type: BackgroundType; // Type of the background
};

/**
* This object represents a service message about a new forum topic created in the chat.
*/
export type ForumTopicCreated = {
  name: string; // Name of the topic
  icon_color: Integer; // Color of the topic icon in RGB format
  icon_custom_emoji_id?: string; // Optional. Unique identifier of the custom emoji shown as the topic icon
};

/**
* This object represents a service message about a forum topic closed in the chat. Currently holds
* no information.
*/
export type ForumTopicClosed = {};

/**
* This object represents a service message about an edited forum topic.
*/
export type ForumTopicEdited = {
  name?: string; // Optional. New name of the topic, if it was edited
  icon_custom_emoji_id?: string; // Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
};

/**
* This object represents a service message about a forum topic reopened in the chat. Currently holds
* no information.
*/
export type ForumTopicReopened = {};

/**
* This object represents a service message about General forum topic hidden in the chat. Currently
* holds no information.
*/
export type GeneralForumTopicHidden = {};

/**
* This object represents a service message about General forum topic unhidden in the chat. Currently
* holds no information.
*/
export type GeneralForumTopicUnhidden = {};

/**
* This object contains information about a user that was shared with the bot using a
* KeyboardButtonRequestUsers button.
*/
export type SharedUser = {
  user_id: Integer; // Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
  first_name?: string; // Optional. First name of the user, if the name was requested by the bot
  last_name?: string; // Optional. Last name of the user, if the name was requested by the bot
  username?: string; // Optional. Username of the user, if the username was requested by the bot
  photo?: PhotoSize[]; // Optional. Available sizes of the chat photo, if the photo was requested by the bot
};

/**
* This object contains information about the users whose identifiers were shared with the bot using
* a KeyboardButtonRequestUsers button.
*/
export type UsersShared = {
  request_id: Integer; // Identifier of the request
  users: SharedUser[]; // Information about users shared with the bot.
};

/**
* This object contains information about a chat that was shared with the bot using a
* KeyboardButtonRequestChat button.
*/
export type ChatShared = {
  request_id: Integer; // Identifier of the request
  chat_id: Integer; // Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
  title?: string; // Optional. Title of the chat, if the title was requested by the bot.
  username?: string; // Optional. Username of the chat, if the username was requested by the bot and available.
  photo?: PhotoSize[]; // Optional. Available sizes of the chat photo, if the photo was requested by the bot
};

/**
* This object represents a service message about a user allowing a bot to write messages after
* adding it to the attachment menu, launching a Web App from a link, or accepting an explicit
* request from a Web App sent by the method requestWriteAccess.
*/
export type WriteAccessAllowed = {
  from_request?: boolean; // Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
  web_app_name?: string; // Optional. Name of the Web App, if the access was granted when the Web App was launched from a link
  from_attachment_menu?: boolean; // Optional. True, if the access was granted when the bot was added to the attachment or side menu
};

/**
* This object represents a service message about a video chat scheduled in the chat.
*/
export type VideoChatScheduled = {
  start_date: Integer; // Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
};

/**
* This object represents a service message about a video chat started in the chat. Currently holds
* no information.
*/
export type VideoChatStarted = {};

/**
* This object represents a service message about a video chat ended in the chat.
*/
export type VideoChatEnded = {
  duration: Integer; // Video chat duration in seconds
};

/**
* This object represents a service message about new members invited to a video chat.
*/
export type VideoChatParticipantsInvited = {
  users: User[]; // New members that were invited to the video chat
};

/**
* Describes a service message about a change in the price of paid messages within a chat.
*/
export type PaidMessagePriceChanged = {
  paid_message_star_count: Integer; // The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message
};

/**
* Describes a service message about a change in the price of direct messages sent to a channel chat.
*/
export type DirectMessagePriceChanged = {
  are_direct_messages_enabled: boolean; // True, if direct messages are enabled for the channel chat; false otherwise
  direct_message_star_count?: Integer; // Optional. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.
};

/**
* Describes a service message about the approval of a suggested post.
*/
export type SuggestedPostApproved = {
  suggested_post_message?: Message; // Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  price?: SuggestedPostPrice; // Optional. Amount paid for the post
  send_date: Integer; // Date when the post will be published
};

/**
* Describes a service message about the failed approval of a suggested post. Currently, only caused
* by insufficient user funds at the time of approval.
*/
export type SuggestedPostApprovalFailed = {
  suggested_post_message?: Message; // Optional. Message containing the suggested post whose approval has failed. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  price: SuggestedPostPrice; // Expected price of the post
};

/**
* Describes a service message about the rejection of a suggested post.
*/
export type SuggestedPostDeclined = {
  suggested_post_message?: Message; // Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  comment?: string; // Optional. Comment with which the post was declined
};

/**
* Describes a service message about a successful payment for a suggested post.
*/
export type SuggestedPostPaid = {
  suggested_post_message?: Message; // Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  currency: 'XTR' | 'TON'; // Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins
  amount?: Integer; // Optional. The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins only
  star_amount?: StarAmount; // Optional. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only
};

/**
* Describes a service message about a payment refund for a suggested post.
*/
export type SuggestedPostRefunded = {
  suggested_post_message?: Message; // Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.
  reason: 'post_deleted' | 'payment_refunded'; // Reason for the refund. Currently, one of “post_deleted” if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or “payment_refunded” if the payer refunded their payment.
};

/**
* This object represents a service message about the creation of a scheduled giveaway.
*/
export type GiveawayCreated = {
  prize_star_count?: Integer; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
};

/**
* This object represents a message about a scheduled giveaway.
*/
export type Giveaway = {
  chats: Chat[]; // The list of chats which the user must join to participate in the giveaway
  winners_selection_date: Integer; // Point in time (Unix timestamp) when winners of the giveaway will be selected
  winner_count: Integer; // The number of users which are supposed to be selected as winners of the giveaway
  only_new_members?: True; // Optional. True, if only users who join the chats after the giveaway started should be eligible to win
  has_public_winners?: True; // Optional. True, if the list of giveaway winners will be visible to everyone
  prize_description?: string; // Optional. Description of additional giveaway prize
  country_codes?: string[]; // Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
  prize_star_count?: Integer; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
  premium_subscription_month_count?: Integer; // Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
};

/**
* This object represents a message about the completion of a giveaway with public winners.
*/
export type GiveawayWinners = {
  chat: Chat; // The chat that created the giveaway
  giveaway_message_id: Integer; // Identifier of the message with the giveaway in the chat
  winners_selection_date: Integer; // Point in time (Unix timestamp) when winners of the giveaway were selected
  winner_count: Integer; // Total number of winners in the giveaway
  winners: User[]; // List of up to 100 winners of the giveaway
  additional_chat_count?: Integer; // Optional. The number of other chats the user had to join in order to be eligible for the giveaway
  prize_star_count?: Integer; // Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
  premium_subscription_month_count?: Integer; // Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
  unclaimed_prize_count?: Integer; // Optional. Number of undistributed prizes
  only_new_members?: True; // Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
  was_refunded?: True; // Optional. True, if the giveaway was canceled because the payment for it was refunded
  prize_description?: string; // Optional. Description of additional giveaway prize
};

/**
* This object represents a service message about the completion of a giveaway without public
* winners.
*/
export type GiveawayCompleted = {
  winner_count: Integer; // Number of winners in the giveaway
  unclaimed_prize_count?: Integer; // Optional. Number of undistributed prizes
  giveaway_message?: Message; // Optional. Message with the giveaway that was completed, if it wasn&#39;t deleted
  is_star_giveaway?: True; // Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
};

/**
* Describes the options used for link preview generation.
*/
export type LinkPreviewOptions = {
  is_disabled?: boolean; // Optional. True, if the link preview is disabled
  url?: string; // Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used
  prefer_small_media?: boolean; // Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn&#39;t explicitly specified or media size change isn&#39;t supported for the preview
  prefer_large_media?: boolean; // Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn&#39;t explicitly specified or media size change isn&#39;t supported for the preview
  show_above_text?: boolean; // Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
};

/**
* Desribes price of a suggested post.
*/
export type SuggestedPostPrice = {
  currency: 'XTR' | 'TON'; // Currency in which the post will be paid. Currently, must be one of “XTR” for Telegram Stars or “TON” for toncoins
  amount: Integer; // The amount of the currency that will be paid for the post in the smallest units of the currency, i.e. Telegram Stars or nanotoncoins. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanotoncoins must be between 10000000 and 10000000000000.
};

/**
* Contains information about a suggested post.
*/
export type SuggestedPostInfo = {
  state: 'pending' | 'approved' | 'declined'; // State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”.
  price?: SuggestedPostPrice; // Optional. Proposed price of the post. If the field is omitted, then the post is unpaid.
  send_date?: Integer; // Optional. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.
};

/**
* Contains parameters of a post that is being suggested by the bot.
*/
export type SuggestedPostParameters = {
  price?: SuggestedPostPrice; // Optional. Proposed price for the post. If the field is omitted, then the post is unpaid.
  send_date?: Integer; // Optional. Proposed send date of the post. If specified, then the date must be between 300 second and 2678400 seconds (30 days) in the future. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user who approves it.
};

/**
* Describes a topic of a direct messages chat.
*/
export type DirectMessagesTopic = {
  topic_id: Integer; // Unique identifier of the topic
  user?: User; // Optional. Information about the user that created the topic. Currently, it is always present
};

/**
* This object represent a user&#39;s profile pictures.
*/
export type UserProfilePhotos = {
  total_count: Integer; // Total number of profile pictures the target user has
  photos: PhotoSize[][]; // Requested profile pictures (in up to 4 sizes each)
};

/**
* This object represents a file ready to be downloaded. The file can be downloaded via the link
* https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;. It is guaranteed that the link
* will be valid for at least 1 hour. When the link expires, a new one can be requested by calling
* getFile.
* The maximum file size to download is 20 MB
*/
export type File = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  file_size?: Integer; // Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
  file_path?: string; // Optional. File path. Use https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt; to get the file.
};

/**
* Describes a Web App.
*/
export type WebAppInfo = {
  url: string; // An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
};

/**
* This object represents a custom keyboard with reply options (see Introduction to bots for details
* and examples). Not supported in channels and for messages sent on behalf of a Telegram Business
* account.
*/
export type ReplyKeyboardMarkup = {
  keyboard: KeyboardButton[][]; // Array of button rows, each represented by an Array of KeyboardButton objects
  is_persistent?: boolean; // Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
  resize_keyboard?: boolean; // Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app&#39;s standard keyboard.
  one_time_keyboard?: boolean; // Optional. Requests clients to hide the keyboard as soon as it&#39;s been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
  input_field_placeholder?: string; // Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
  selective?: boolean; // Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot&#39;s message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot&#39;s language, bot replies to the request with a keyboard to select the new language. Other users in the group don&#39;t see the keyboard.
};

/**
* This object represents one button of the reply keyboard. At most one of the optional fields must
* be used to specify type of the button. For simple text buttons, String can be used instead of this
* object to specify the button text.
*/
export type KeyboardButton = {
  text: string; // Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
  request_users?: KeyboardButtonRequestUsers; // Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.
  request_chat?: KeyboardButtonRequestChat; // Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.
  request_contact?: boolean; // Optional. If True, the user&#39;s phone number will be sent as a contact when the button is pressed. Available in private chats only.
  request_location?: boolean; // Optional. If True, the user&#39;s current location will be sent when the button is pressed. Available in private chats only.
  request_poll?: KeyboardButtonPollType; // Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
  web_app?: WebAppInfo; // Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
};

/**
* This object defines the criteria used to request suitable users. Information about the selected
* users will be shared with the bot when the corresponding button is pressed. More about requesting
* users »
*/
export type KeyboardButtonRequestUsers = {
  request_id: Integer; // Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message
  user_is_bot?: boolean; // Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.
  user_is_premium?: boolean; // Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.
  max_quantity?: Integer; // Optional. The maximum number of users to be selected; 1-10. Defaults to 1.
  request_name?: boolean; // Optional. Pass True to request the users&#39; first and last names
  request_username?: boolean; // Optional. Pass True to request the users&#39; usernames
  request_photo?: boolean; // Optional. Pass True to request the users&#39; photos
};

/**
* This object defines the criteria used to request a suitable chat. Information about the selected
* chat will be shared with the bot when the corresponding button is pressed. The bot will be granted
* requested rights in the chat if appropriate. More about requesting chats ».
*/
export type KeyboardButtonRequestChat = {
  request_id: Integer; // Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message
  chat_is_channel: boolean; // Pass True to request a channel chat, pass False to request a group or a supergroup chat.
  chat_is_forum?: boolean; // Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
  chat_has_username?: boolean; // Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
  chat_is_created?: boolean; // Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
  user_administrator_rights?: ChatAdministratorRights; // Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
  bot_administrator_rights?: ChatAdministratorRights; // Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
  bot_is_member?: boolean; // Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
  request_title?: boolean; // Optional. Pass True to request the chat&#39;s title
  request_username?: boolean; // Optional. Pass True to request the chat&#39;s username
  request_photo?: boolean; // Optional. Pass True to request the chat&#39;s photo
};

/**
* This object represents type of a poll, which is allowed to be created and sent when the
* corresponding button is pressed.
*/
export type KeyboardButtonPollType = {
  type?: string; // Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
};

/**
* Upon receiving a message with this object, Telegram clients will remove the current custom
* keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until
* a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden
* immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels
* and for messages sent on behalf of a Telegram Business account.
*/
export type ReplyKeyboardRemove = {
  remove_keyboard: True; // Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
  selective?: boolean; // Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot&#39;s message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven&#39;t voted yet.
};

/**
* This object represents an inline keyboard that appears right next to the message it belongs to.
*/
export type InlineKeyboardMarkup = {
  inline_keyboard: InlineKeyboardButton[][]; // Array of button rows, each represented by an Array of InlineKeyboardButton objects
};

/**
* This object represents one button of an inline keyboard. Exactly one of the optional fields must
* be used to specify type of the button.
*/
export type InlineKeyboardButton = {
  text: string; // Label text on the button
  url?: string; // Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=&lt;user_id&gt; can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
  callback_data?: string; // Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
  web_app?: WebAppInfo; // Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
  login_url?: LoginUrl; // Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
  switch_inline_query?: string; // Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot&#39;s username and the specified inline query in the input field. May be empty, in which case just the bot&#39;s username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
  switch_inline_query_current_chat?: string; // Optional. If set, pressing the button will insert the bot&#39;s username and the specified inline query in the current chat&#39;s input field. May be empty, in which case only the bot&#39;s username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat; // Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot&#39;s username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.
  copy_text?: CopyTextButton; // Optional. Description of the button that copies the specified text to the clipboard.
  callback_game?: CallbackGame; // Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
  pay?: boolean; // Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons&#39;s text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
};

/**
* This object represents a parameter of the inline keyboard button used to automatically authorize a
* user. Serves as a great replacement for the Telegram Login Widget when the user is coming from
* Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
*   
* Telegram apps support these buttons as of version 5.7.
* Sample bot: @discussbot
*/
export type LoginUrl = {
  url: string; // An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
  forward_text?: string; // Optional. New text of the button in forwarded messages.
  bot_username?: string; // Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot&#39;s username will be assumed. The url&#39;s domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
  request_write_access?: boolean; // Optional. Pass True to request the permission for your bot to send messages to the user.
};

/**
* This object represents an inline button that switches the current user to inline mode in a chosen
* chat, with an optional default inline query.
*/
export type SwitchInlineQueryChosenChat = {
  query?: string; // Optional. The default inline query to be inserted in the input field. If left empty, only the bot&#39;s username will be inserted
  allow_user_chats?: boolean; // Optional. True, if private chats with users can be chosen
  allow_bot_chats?: boolean; // Optional. True, if private chats with bots can be chosen
  allow_group_chats?: boolean; // Optional. True, if group and supergroup chats can be chosen
  allow_channel_chats?: boolean; // Optional. True, if channel chats can be chosen
};

/**
* This object represents an inline keyboard button that copies specified text to the clipboard.
*/
export type CopyTextButton = {
  text: string; // The text to be copied to the clipboard; 1-256 characters
};

/**
* This object represents an incoming callback query from a callback button in an inline keyboard. If
* the button that originated the query was attached to a message sent by the bot, the field message
* will be present. If the button was attached to a message sent via the bot (in inline mode), the
* field inline_message_id will be present. Exactly one of the fields data or game_short_name will be
* present.
*/
export type CallbackQuery = {
  id: string; // Unique identifier for this query
  from: User; // Sender
  message?: MaybeInaccessibleMessage; // Optional. Message sent by the bot with the callback button that originated the query
  inline_message_id?: string; // Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
  chat_instance: string; // Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
  data?: string; // Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
  game_short_name?: string; // Optional. Short name of a Game to be returned, serves as the unique identifier for the game
};

/**
* Upon receiving a message with this object, Telegram clients will display a reply interface to the
* user (act as if the user has selected the bot&#39;s message and tapped &#39;Reply&#39;). This can
* be extremely useful if you want to create user-friendly step-by-step interfaces without having to
* sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram
* Business account.
*/
export type ForceReply = {
  force_reply: True; // Shows reply interface to the user, as if they manually selected the bot&#39;s message and tapped &#39;Reply&#39;
  input_field_placeholder?: string; // Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters
  selective?: boolean; // Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot&#39;s message is a reply to a message in the same chat and forum topic, sender of the original message.
};

/**
* This object represents a chat photo.
*/
export type ChatPhoto = {
  small_file_id: string; // File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
  small_file_unique_id: string; // Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  big_file_id: string; // File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
  big_file_unique_id: string; // Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
};

/**
* Represents an invite link for a chat.
*/
export type ChatInviteLink = {
  invite_link: string; // The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
  creator: User; // Creator of the link
  creates_join_request: boolean; // True, if users joining the chat via the link need to be approved by chat administrators
  is_primary: boolean; // True, if the link is primary
  is_revoked: boolean; // True, if the link is revoked
  name?: string; // Optional. Invite link name
  expire_date?: Integer; // Optional. Point in time (Unix timestamp) when the link will expire or has been expired
  member_limit?: Integer; // Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  pending_join_request_count?: Integer; // Optional. Number of pending join requests created using this link
  subscription_period?: Integer; // Optional. The number of seconds the subscription will be active for before the next payment
  subscription_price?: Integer; // Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
};

/**
* Represents the rights of an administrator in a chat.
*/
export type ChatAdministratorRights = {
  is_anonymous: boolean; // True, if the user&#39;s presence in the chat is hidden
  can_manage_chat: boolean; // True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
  can_delete_messages: boolean; // True, if the administrator can delete messages of other users
  can_manage_video_chats: boolean; // True, if the administrator can manage video chats
  can_restrict_members: boolean; // True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
  can_promote_members: boolean; // True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
  can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
  can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
  can_post_stories: boolean; // True, if the administrator can post stories to the chat
  can_edit_stories: boolean; // True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat&#39;s story archive
  can_delete_stories: boolean; // True, if the administrator can delete stories posted by other users
  can_post_messages?: boolean; // Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
  can_edit_messages?: boolean; // Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
  can_pin_messages?: boolean; // Optional. True, if the user is allowed to pin messages; for groups and supergroups only
  can_manage_topics?: boolean; // Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
  can_manage_direct_messages?: boolean; // Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only
};

/**
* This object represents changes in the status of a chat member.
*/
export type ChatMemberUpdated = {
  chat: Chat; // Chat the user belongs to
  from: User; // Performer of the action, which resulted in the change
  date: Integer; // Date the change was done in Unix time
  old_chat_member: ChatMember; // Previous information about the chat member
  new_chat_member: ChatMember; // New information about the chat member
  invite_link?: ChatInviteLink; // Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
  via_join_request?: boolean; // Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
  via_chat_folder_invite_link?: boolean; // Optional. True, if the user joined the chat via a chat folder invite link
};

/**
* This object contains information about one member of a chat. Currently, the following 6 types of
* chat members are supported:
*/
export type ChatMember = ChatMemberOwner |
  ChatMemberAdministrator |
  ChatMemberMember |
  ChatMemberRestricted |
  ChatMemberLeft |
  ChatMemberBanned;

/**
* Represents a chat member that owns the chat and has all administrator privileges.
*/
export type ChatMemberOwner = {
  status: 'creator'; // The member&#39;s status in the chat, always “creator”
  user: User; // Information about the user
  is_anonymous: boolean; // True, if the user&#39;s presence in the chat is hidden
  custom_title?: string; // Optional. Custom title for this user
};

/**
* Represents a chat member that has some additional privileges.
*/
export type ChatMemberAdministrator = {
  status: 'administrator'; // The member&#39;s status in the chat, always “administrator”
  user: User; // Information about the user
  can_be_edited: boolean; // True, if the bot is allowed to edit administrator privileges of that user
  is_anonymous: boolean; // True, if the user&#39;s presence in the chat is hidden
  can_manage_chat: boolean; // True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
  can_delete_messages: boolean; // True, if the administrator can delete messages of other users
  can_manage_video_chats: boolean; // True, if the administrator can manage video chats
  can_restrict_members: boolean; // True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
  can_promote_members: boolean; // True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
  can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
  can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
  can_post_stories: boolean; // True, if the administrator can post stories to the chat
  can_edit_stories: boolean; // True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat&#39;s story archive
  can_delete_stories: boolean; // True, if the administrator can delete stories posted by other users
  can_post_messages?: boolean; // Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
  can_edit_messages?: boolean; // Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
  can_pin_messages?: boolean; // Optional. True, if the user is allowed to pin messages; for groups and supergroups only
  can_manage_topics?: boolean; // Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
  can_manage_direct_messages?: boolean; // Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only
  custom_title?: string; // Optional. Custom title for this user
};

/**
* Represents a chat member that has no additional privileges or restrictions.
*/
export type ChatMemberMember = {
  status: 'member'; // The member&#39;s status in the chat, always “member”
  user: User; // Information about the user
  until_date?: Integer; // Optional. Date when the user&#39;s subscription will expire; Unix time
};

/**
* Represents a chat member that is under certain restrictions in the chat. Supergroups only.
*/
export type ChatMemberRestricted = {
  status: 'restricted'; // The member&#39;s status in the chat, always “restricted”
  user: User; // Information about the user
  is_member: boolean; // True, if the user is a member of the chat at the moment of the request
  can_send_messages: boolean; // True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
  can_send_audios: boolean; // True, if the user is allowed to send audios
  can_send_documents: boolean; // True, if the user is allowed to send documents
  can_send_photos: boolean; // True, if the user is allowed to send photos
  can_send_videos: boolean; // True, if the user is allowed to send videos
  can_send_video_notes: boolean; // True, if the user is allowed to send video notes
  can_send_voice_notes: boolean; // True, if the user is allowed to send voice notes
  can_send_polls: boolean; // True, if the user is allowed to send polls and checklists
  can_send_other_messages: boolean; // True, if the user is allowed to send animations, games, stickers and use inline bots
  can_add_web_page_previews: boolean; // True, if the user is allowed to add web page previews to their messages
  can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
  can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
  can_pin_messages: boolean; // True, if the user is allowed to pin messages
  can_manage_topics: boolean; // True, if the user is allowed to create forum topics
  until_date: Integer; // Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
};

/**
* Represents a chat member that isn&#39;t currently a member of the chat, but may join it
* themselves.
*/
export type ChatMemberLeft = {
  status: 'left'; // The member&#39;s status in the chat, always “left”
  user: User; // Information about the user
};

/**
* Represents a chat member that was banned in the chat and can&#39;t return to the chat or view chat
* messages.
*/
export type ChatMemberBanned = {
  status: 'kicked'; // The member&#39;s status in the chat, always “kicked”
  user: User; // Information about the user
  until_date: Integer; // Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
};

/**
* Represents a join request sent to a chat.
*/
export type ChatJoinRequest = {
  chat: Chat; // Chat to which the request was sent
  from: User; // User that sent the join request
  user_chat_id: Integer; // Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
  date: Integer; // Date the request was sent in Unix time
  bio?: string; // Optional. Bio of the user.
  invite_link?: ChatInviteLink; // Optional. Chat invite link that was used by the user to send the join request
};

/**
* Describes actions that a non-administrator user is allowed to take in a chat.
*/
export type ChatPermissions = {
  can_send_messages?: boolean; // Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
  can_send_audios?: boolean; // Optional. True, if the user is allowed to send audios
  can_send_documents?: boolean; // Optional. True, if the user is allowed to send documents
  can_send_photos?: boolean; // Optional. True, if the user is allowed to send photos
  can_send_videos?: boolean; // Optional. True, if the user is allowed to send videos
  can_send_video_notes?: boolean; // Optional. True, if the user is allowed to send video notes
  can_send_voice_notes?: boolean; // Optional. True, if the user is allowed to send voice notes
  can_send_polls?: boolean; // Optional. True, if the user is allowed to send polls and checklists
  can_send_other_messages?: boolean; // Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
  can_add_web_page_previews?: boolean; // Optional. True, if the user is allowed to add web page previews to their messages
  can_change_info?: boolean; // Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
  can_invite_users?: boolean; // Optional. True, if the user is allowed to invite new users to the chat
  can_pin_messages?: boolean; // Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
  can_manage_topics?: boolean; // Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
};

/**
* Describes the birthdate of a user.
*/
export type Birthdate = {
  day: Integer; // Day of the user&#39;s birth; 1-31
  month: Integer; // Month of the user&#39;s birth; 1-12
  year?: Integer; // Optional. Year of the user&#39;s birth
};

/**
* Contains information about the start page settings of a Telegram Business account.
*/
export type BusinessIntro = {
  title?: string; // Optional. Title text of the business intro
  message?: string; // Optional. Message text of the business intro
  sticker?: Sticker; // Optional. Sticker of the business intro
};

/**
* Contains information about the location of a Telegram Business account.
*/
export type BusinessLocation = {
  address: string; // Address of the business
  location?: Location; // Optional. Location of the business
};

/**
* Describes an interval of time during which a business is open.
*/
export type BusinessOpeningHoursInterval = {
  opening_minute: Integer; // The minute&#39;s sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
  closing_minute: Integer; // The minute&#39;s sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
};

/**
* Describes the opening hours of a business.
*/
export type BusinessOpeningHours = {
  time_zone_name: string; // Unique name of the time zone for which the opening hours are defined
  opening_hours: BusinessOpeningHoursInterval[]; // List of time intervals describing business opening hours
};

/**
* Describes the position of a clickable area within a story.
*/
export type StoryAreaPosition = {
  x_percentage: Float; // The abscissa of the area&#39;s center, as a percentage of the media width
  y_percentage: Float; // The ordinate of the area&#39;s center, as a percentage of the media height
  width_percentage: Float; // The width of the area&#39;s rectangle, as a percentage of the media width
  height_percentage: Float; // The height of the area&#39;s rectangle, as a percentage of the media height
  rotation_angle: Float; // The clockwise rotation angle of the rectangle, in degrees; 0-360
  corner_radius_percentage: Float; // The radius of the rectangle corner rounding, as a percentage of the media width
};

/**
* Describes the physical address of a location.
*/
export type LocationAddress = {
  country_code: string; // The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located
  state?: string; // Optional. State of the location
  city?: string; // Optional. City of the location
  street?: string; // Optional. Street address of the location
};

/**
* Describes the type of a clickable area on a story. Currently, it can be one of
*/
export type StoryAreaType = StoryAreaTypeLocation |
  StoryAreaTypeSuggestedReaction |
  StoryAreaTypeLink |
  StoryAreaTypeWeather |
  StoryAreaTypeUniqueGift;

/**
* Describes a story area pointing to a location. Currently, a story can have up to 10 location
* areas.
*/
export type StoryAreaTypeLocation = {
  type: 'location'; // Type of the area, always “location”
  latitude: Float; // Location latitude in degrees
  longitude: Float; // Location longitude in degrees
  address?: LocationAddress; // Optional. Address of the location
};

/**
* Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5
* suggested reaction areas.
*/
export type StoryAreaTypeSuggestedReaction = {
  type: 'suggested_reaction'; // Type of the area, always “suggested_reaction”
  reaction_type: ReactionType; // Type of the reaction
  is_dark?: boolean; // Optional. Pass True if the reaction area has a dark background
  is_flipped?: boolean; // Optional. Pass True if reaction area corner is flipped
};

/**
* Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link
* areas.
*/
export type StoryAreaTypeLink = {
  type: 'link'; // Type of the area, always “link”
  url: string; // HTTP or tg:// URL to be opened when the area is clicked
};

/**
* Describes a story area containing weather information. Currently, a story can have up to 3 weather
* areas.
*/
export type StoryAreaTypeWeather = {
  type: 'weather'; // Type of the area, always “weather”
  temperature: Float; // Temperature, in degree Celsius
  emoji: string; // Emoji representing the weather
  background_color: Integer; // A color of the area background in the ARGB format
};

/**
* Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique
* gift area.
*/
export type StoryAreaTypeUniqueGift = {
  type: 'unique_gift'; // Type of the area, always “unique_gift”
  name: string; // Unique name of the gift
};

/**
* Describes a clickable area on a story media.
*/
export type StoryArea = {
  position: StoryAreaPosition; // Position of the area
  type: StoryAreaType; // Type of the area
};

/**
* Represents a location to which a chat is connected.
*/
export type ChatLocation = {
  location: Location; // The location to which the supergroup is connected. Can&#39;t be a live location.
  address: string; // Location address; 1-64 characters, as defined by the chat owner
};

/**
* This object describes the type of a reaction. Currently, it can be one of
*/
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

/**
* The reaction is based on an emoji.
*/
export type ReactionTypeEmoji = {
  type: 'emoji'; // Type of the reaction, always “emoji”
  emoji: string; // Reaction emoji. Currently, it can be one of &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;
};

/**
* The reaction is based on a custom emoji.
*/
export type ReactionTypeCustomEmoji = {
  type: 'custom_emoji'; // Type of the reaction, always “custom_emoji”
  custom_emoji_id: string; // Custom emoji identifier
};

/**
* The reaction is paid.
*/
export type ReactionTypePaid = {
  type: 'paid'; // Type of the reaction, always “paid”
};

/**
* Represents a reaction added to a message along with the number of times it was added.
*/
export type ReactionCount = {
  type: ReactionType; // Type of the reaction
  total_count: Integer; // Number of times the reaction was added
};

/**
* This object represents a change of a reaction on a message performed by a user.
*/
export type MessageReactionUpdated = {
  chat: Chat; // The chat containing the message the user reacted to
  message_id: Integer; // Unique identifier of the message inside the chat
  user?: User; // Optional. The user that changed the reaction, if the user isn&#39;t anonymous
  actor_chat?: Chat; // Optional. The chat on behalf of which the reaction was changed, if the user is anonymous
  date: Integer; // Date of the change in Unix time
  old_reaction: ReactionType[]; // Previous list of reaction types that were set by the user
  new_reaction: ReactionType[]; // New list of reaction types that have been set by the user
};

/**
* This object represents reaction changes on a message with anonymous reactions.
*/
export type MessageReactionCountUpdated = {
  chat: Chat; // The chat containing the message
  message_id: Integer; // Unique message identifier inside the chat
  date: Integer; // Date of the change in Unix time
  reactions: ReactionCount[]; // List of reactions that are present on the message
};

/**
* This object represents a forum topic.
*/
export type ForumTopic = {
  message_thread_id: Integer; // Unique identifier of the forum topic
  name: string; // Name of the topic
  icon_color: Integer; // Color of the topic icon in RGB format
  icon_custom_emoji_id?: string; // Optional. Unique identifier of the custom emoji shown as the topic icon
};

/**
* This object represents a gift that can be sent by the bot.
*/
export type Gift = {
  id: string; // Unique identifier of the gift
  sticker: Sticker; // The sticker that represents the gift
  star_count: Integer; // The number of Telegram Stars that must be paid to send the sticker
  upgrade_star_count?: Integer; // Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one
  total_count?: Integer; // Optional. The total number of the gifts of this type that can be sent; for limited gifts only
  remaining_count?: Integer; // Optional. The number of remaining gifts of this type that can be sent; for limited gifts only
  publisher_chat?: Chat; // Optional. Information about the chat that published the gift
};

/**
* This object represent a list of gifts.
*/
export type Gifts = {
  gifts: Gift[]; // The list of gifts
};

/**
* This object describes the model of a unique gift.
*/
export type UniqueGiftModel = {
  name: string; // Name of the model
  sticker: Sticker; // The sticker that represents the unique gift
  rarity_per_mille: Integer; // The number of unique gifts that receive this model for every 1000 gifts upgraded
};

/**
* This object describes the symbol shown on the pattern of a unique gift.
*/
export type UniqueGiftSymbol = {
  name: string; // Name of the symbol
  sticker: Sticker; // The sticker that represents the unique gift
  rarity_per_mille: Integer; // The number of unique gifts that receive this model for every 1000 gifts upgraded
};

/**
* This object describes the colors of the backdrop of a unique gift.
*/
export type UniqueGiftBackdropColors = {
  center_color: Integer; // The color in the center of the backdrop in RGB format
  edge_color: Integer; // The color on the edges of the backdrop in RGB format
  symbol_color: Integer; // The color to be applied to the symbol in RGB format
  text_color: Integer; // The color for the text on the backdrop in RGB format
};

/**
* This object describes the backdrop of a unique gift.
*/
export type UniqueGiftBackdrop = {
  name: string; // Name of the backdrop
  colors: UniqueGiftBackdropColors; // Colors of the backdrop
  rarity_per_mille: Integer; // The number of unique gifts that receive this backdrop for every 1000 gifts upgraded
};

/**
* This object describes a unique gift that was upgraded from a regular gift.
*/
export type UniqueGift = {
  base_name: string; // Human-readable name of the regular gift from which this unique gift was upgraded
  name: string; // Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas
  number: Integer; // Unique number of the upgraded gift among gifts upgraded from the same regular gift
  model: UniqueGiftModel; // Model of the gift
  symbol: UniqueGiftSymbol; // Symbol of the gift
  backdrop: UniqueGiftBackdrop; // Backdrop of the gift
  publisher_chat?: Chat; // Optional. Information about the chat that published the gift
};

/**
* Describes a service message about a regular gift that was sent or received.
*/
export type GiftInfo = {
  gift: Gift; // Information about the gift
  owned_gift_id?: string; // Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
  convert_star_count?: Integer; // Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible
  prepaid_upgrade_star_count?: Integer; // Optional. Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift
  can_be_upgraded?: True; // Optional. True, if the gift can be upgraded to a unique gift
  text?: string; // Optional. Text of the message that was added to the gift
  entities?: MessageEntity[]; // Optional. Special entities that appear in the text
  is_private?: True; // Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
};

/**
* Describes a service message about a unique gift that was sent or received.
*/
export type UniqueGiftInfo = {
  gift: UniqueGift; // Information about the gift
  origin: 'upgrade' | 'transfer' | 'resale'; // Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, or “resale” for gifts bought from other users
  last_resale_star_count?: Integer; // Optional. For gifts bought from other users, the price paid for the gift
  owned_gift_id?: string; // Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
  transfer_star_count?: Integer; // Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
  next_transfer_date?: Integer; // Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now
};

/**
* This object describes a gift received and owned by a user or a chat. Currently, it can be one of
*/
export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;

/**
* Describes a regular gift owned by a user or a chat.
*/
export type OwnedGiftRegular = {
  type: 'regular'; // Type of the gift, always “regular”
  gift: Gift; // Information about the regular gift
  owned_gift_id?: string; // Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
  sender_user?: User; // Optional. Sender of the gift if it is a known user
  send_date: Integer; // Date the gift was sent in Unix time
  text?: string; // Optional. Text of the message that was added to the gift
  entities?: MessageEntity[]; // Optional. Special entities that appear in the text
  is_private?: True; // Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
  is_saved?: True; // Optional. True, if the gift is displayed on the account&#39;s profile page; for gifts received on behalf of business accounts only
  can_be_upgraded?: True; // Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
  was_refunded?: True; // Optional. True, if the gift was refunded and isn&#39;t available anymore
  convert_star_count?: Integer; // Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
  prepaid_upgrade_star_count?: Integer; // Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
};

/**
* Describes a unique gift received and owned by a user or a chat.
*/
export type OwnedGiftUnique = {
  type: 'unique'; // Type of the gift, always “unique”
  gift: UniqueGift; // Information about the unique gift
  owned_gift_id?: string; // Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only
  sender_user?: User; // Optional. Sender of the gift if it is a known user
  send_date: Integer; // Date the gift was sent in Unix time
  is_saved?: True; // Optional. True, if the gift is displayed on the account&#39;s profile page; for gifts received on behalf of business accounts only
  can_be_transferred?: True; // Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only
  transfer_star_count?: Integer; // Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
  next_transfer_date?: Integer; // Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now
};

/**
* Contains the list of gifts received and owned by a user or a chat.
*/
export type OwnedGifts = {
  total_count: Integer; // The total number of gifts owned by the user or the chat
  gifts: OwnedGift[]; // The list of gifts
  next_offset?: string; // Optional. Offset for the next request. If empty, then there are no more results
};

/**
* This object describes the types of gifts that can be gifted to a user or a chat.
*/
export type AcceptedGiftTypes = {
  unlimited_gifts: boolean; // True, if unlimited regular gifts are accepted
  limited_gifts: boolean; // True, if limited regular gifts are accepted
  unique_gifts: boolean; // True, if unique gifts or gifts that can be upgraded to unique for free are accepted
  premium_subscription: boolean; // True, if a Telegram Premium subscription is accepted
};

/**
* Describes an amount of Telegram Stars.
*/
export type StarAmount = {
  amount: Integer; // Integer amount of Telegram Stars, rounded to 0; can be negative
  nanostar_amount?: Integer; // Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive
};

/**
* This object represents a bot command.
*/
export type BotCommand = {
  command: string; // Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
  description: string; // Description of the command; 1-256 characters.
};

/**
* This object represents the scope to which bot commands are applied. Currently, the following 7
* scopes are supported:
*/
export type BotCommandScope = BotCommandScopeDefault |
  BotCommandScopeAllPrivateChats |
  BotCommandScopeAllGroupChats |
  BotCommandScopeAllChatAdministrators |
  BotCommandScopeChat |
  BotCommandScopeChatAdministrators |
  BotCommandScopeChatMember;

/**
* Represents the default scope of bot commands. Default commands are used if no commands with a
* narrower scope are specified for the user.
*/
export type BotCommandScopeDefault = {
  type: 'default'; // Scope type, must be default
};

/**
* Represents the scope of bot commands, covering all private chats.
*/
export type BotCommandScopeAllPrivateChats = {
  type: 'all_private_chats'; // Scope type, must be all_private_chats
};

/**
* Represents the scope of bot commands, covering all group and supergroup chats.
*/
export type BotCommandScopeAllGroupChats = {
  type: 'all_group_chats'; // Scope type, must be all_group_chats
};

/**
* Represents the scope of bot commands, covering all group and supergroup chat administrators.
*/
export type BotCommandScopeAllChatAdministrators = {
  type: 'all_chat_administrators'; // Scope type, must be all_chat_administrators
};

/**
* Represents the scope of bot commands, covering a specific chat.
*/
export type BotCommandScopeChat = {
  type: 'chat'; // Scope type, must be chat
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren&#39;t supported.
};

/**
* Represents the scope of bot commands, covering all administrators of a specific group or
* supergroup chat.
*/
export type BotCommandScopeChatAdministrators = {
  type: 'chat_administrators'; // Scope type, must be chat_administrators
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren&#39;t supported.
};

/**
* Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
*/
export type BotCommandScopeChatMember = {
  type: 'chat_member'; // Scope type, must be chat_member
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren&#39;t supported.
  user_id: Integer; // Unique identifier of the target user
};

/**
* This object represents the bot&#39;s name.
*/
export type BotName = {
  name: string; // The bot&#39;s name
};

/**
* This object represents the bot&#39;s description.
*/
export type BotDescription = {
  description: string; // The bot&#39;s description
};

/**
* This object represents the bot&#39;s short description.
*/
export type BotShortDescription = {
  short_description: string; // The bot&#39;s short description
};

/**
* This object describes the bot&#39;s menu button in a private chat. It should be one of
*/
export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;

/**
* Represents a menu button, which opens the bot&#39;s list of commands.
*/
export type MenuButtonCommands = {
  type: 'commands'; // Type of the button, must be commands
};

/**
* Represents a menu button, which launches a Web App.
*/
export type MenuButtonWebApp = {
  type: 'web_app'; // Type of the button, must be web_app
  text: string; // Text on the button
  web_app: WebAppInfo; // Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App&#39;s URL, in which case the Web App will be opened as if the user pressed the link.
};

/**
* Describes that no specific value for the menu button was set.
*/
export type MenuButtonDefault = {
  type: 'default'; // Type of the button, must be default
};

/**
* This object describes the source of a chat boost. It can be one of
*/
export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway;

/**
* The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium
* subscription to another user.
*/
export type ChatBoostSourcePremium = {
  source: 'premium'; // Source of the boost, always “premium”
  user: User; // User that boosted the chat
};

/**
* The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such
* code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
*/
export type ChatBoostSourceGiftCode = {
  source: 'gift_code'; // Source of the boost, always “gift_code”
  user: User; // User for which the gift code was created
};

/**
* The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This
* boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for
* Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star
* giveaways.
*/
export type ChatBoostSourceGiveaway = {
  source: 'giveaway'; // Source of the boost, always “giveaway”
  giveaway_message_id: Integer; // Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn&#39;t sent yet.
  user?: User; // Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only
  prize_star_count?: Integer; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
  is_unclaimed?: True; // Optional. True, if the giveaway was completed, but there was no user to win the prize
};

/**
* This object contains information about a chat boost.
*/
export type ChatBoost = {
  boost_id: string; // Unique identifier of the boost
  add_date: Integer; // Point in time (Unix timestamp) when the chat was boosted
  expiration_date: Integer; // Point in time (Unix timestamp) when the boost will automatically expire, unless the booster&#39;s Telegram Premium subscription is prolonged
  source: ChatBoostSource; // Source of the added boost
};

/**
* This object represents a boost added to a chat or changed.
*/
export type ChatBoostUpdated = {
  chat: Chat; // Chat which was boosted
  boost: ChatBoost; // Information about the chat boost
};

/**
* This object represents a boost removed from a chat.
*/
export type ChatBoostRemoved = {
  chat: Chat; // Chat which was boosted
  boost_id: string; // Unique identifier of the boost
  remove_date: Integer; // Point in time (Unix timestamp) when the boost was removed
  source: ChatBoostSource; // Source of the removed boost
};

/**
* This object represents a list of boosts added to a chat by a user.
*/
export type UserChatBoosts = {
  boosts: ChatBoost[]; // The list of boosts added to the chat by the user
};

/**
* Represents the rights of a business bot.
*/
export type BusinessBotRights = {
  can_reply?: True; // Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
  can_read_messages?: True; // Optional. True, if the bot can mark incoming private messages as read
  can_delete_sent_messages?: True; // Optional. True, if the bot can delete messages sent by the bot
  can_delete_all_messages?: True; // Optional. True, if the bot can delete all private messages in managed chats
  can_edit_name?: True; // Optional. True, if the bot can edit the first and last name of the business account
  can_edit_bio?: True; // Optional. True, if the bot can edit the bio of the business account
  can_edit_profile_photo?: True; // Optional. True, if the bot can edit the profile photo of the business account
  can_edit_username?: True; // Optional. True, if the bot can edit the username of the business account
  can_change_gift_settings?: True; // Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account
  can_view_gifts_and_stars?: True; // Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
  can_convert_gifts_to_stars?: True; // Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars
  can_transfer_and_upgrade_gifts?: True; // Optional. True, if the bot can transfer and upgrade gifts owned by the business account
  can_transfer_stars?: True; // Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
  can_manage_stories?: True; // Optional. True, if the bot can post, edit and delete stories on behalf of the business account
};

/**
* Describes the connection of the bot with a business account.
*/
export type BusinessConnection = {
  id: string; // Unique identifier of the business connection
  user: User; // Business account user that created the business connection
  user_chat_id: Integer; // Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
  date: Integer; // Date the connection was established in Unix time
  rights?: BusinessBotRights; // Optional. Rights of the business bot
  is_enabled: boolean; // True, if the connection is active
};

/**
* This object is received when messages are deleted from a connected business account.
*/
export type BusinessMessagesDeleted = {
  business_connection_id: string; // Unique identifier of the business connection
  chat: Chat; // Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
  message_ids: Integer[]; // The list of identifiers of deleted messages in the chat of the business account
};

/**
* Describes why a request was unsuccessful.
*/
export type ResponseParameters = {
  migrate_to_chat_id?: Integer; // Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
  retry_after?: Integer; // Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
};

/**
* This object represents the content of a media message to be sent. It should be one of
*/
export type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;

/**
* Represents a photo to be sent.
*/
export type InputMediaPhoto = {
  type: 'photo'; // Type of the result, must be photo
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  caption?: string; // Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Optional. Pass True if the photo needs to be covered with a spoiler animation
};

/**
* Represents a video to be sent.
*/
export type InputMediaVideo = {
  type: 'video'; // Type of the result, must be video
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  cover?: string; // Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  start_timestamp?: Integer; // Optional. Start timestamp for the video in the message
  caption?: string; // Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  width?: Integer; // Optional. Video width
  height?: Integer; // Optional. Video height
  duration?: Integer; // Optional. Video duration in seconds
  supports_streaming?: boolean; // Optional. Pass True if the uploaded video is suitable for streaming
  has_spoiler?: boolean; // Optional. Pass True if the video needs to be covered with a spoiler animation
};

/**
* Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
*/
export type InputMediaAnimation = {
  type: 'animation'; // Type of the result, must be animation
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  caption?: string; // Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  width?: Integer; // Optional. Animation width
  height?: Integer; // Optional. Animation height
  duration?: Integer; // Optional. Animation duration in seconds
  has_spoiler?: boolean; // Optional. Pass True if the animation needs to be covered with a spoiler animation
};

/**
* Represents an audio file to be treated as music to be sent.
*/
export type InputMediaAudio = {
  type: 'audio'; // Type of the result, must be audio
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  caption?: string; // Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: Integer; // Optional. Duration of the audio in seconds
  performer?: string; // Optional. Performer of the audio
  title?: string; // Optional. Title of the audio
};

/**
* Represents a general file to be sent.
*/
export type InputMediaDocument = {
  type: 'document'; // Type of the result, must be document
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  caption?: string; // Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  disable_content_type_detection?: boolean; // Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
};

/**
* This object represents the contents of a file to be uploaded. Must be posted using multipart/form
* -data in the usual way that files are uploaded via the browser.
*/
export type InputFile = {};

/**
* This object describes the paid media to be sent. Currently, it can be one of
*/
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;

/**
* The paid media to send is a photo.
*/
export type InputPaidMediaPhoto = {
  type: 'photo'; // Type of the media, must be photo
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
};

/**
* The paid media to send is a video.
*/
export type InputPaidMediaVideo = {
  type: 'video'; // Type of the media, must be video
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  cover?: string; // Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  start_timestamp?: Integer; // Optional. Start timestamp for the video in the message
  width?: Integer; // Optional. Video width
  height?: Integer; // Optional. Video height
  duration?: Integer; // Optional. Video duration in seconds
  supports_streaming?: boolean; // Optional. Pass True if the uploaded video is suitable for streaming
};

/**
* This object describes a profile photo to set. Currently, it can be one of
*/
export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated;

/**
* A static profile photo in the .JPG format.
*/
export type InputProfilePhotoStatic = {
  type: 'static'; // Type of the profile photo, must be static
  photo: string; // The static profile photo. Profile photos can&#39;t be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
};

/**
* An animated profile photo in the MPEG4 format.
*/
export type InputProfilePhotoAnimated = {
  type: 'animated'; // Type of the profile photo, must be animated
  animation: string; // The animated profile photo. Profile photos can&#39;t be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  main_frame_timestamp?: Float; // Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
};

/**
* This object describes the content of a story to post. Currently, it can be one of
*/
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;

/**
* Describes a photo to post as a story.
*/
export type InputStoryContentPhoto = {
  type: 'photo'; // Type of the content, must be photo
  photo: string; // The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can&#39;t be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
};

/**
* Describes a video to post as a story.
*/
export type InputStoryContentVideo = {
  type: 'video'; // Type of the content, must be video
  video: string; // The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can&#39;t be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the video was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  duration?: Float; // Optional. Precise duration of the video in seconds; 0-60
  cover_frame_timestamp?: Float; // Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
  is_animation?: boolean; // Optional. Pass True if the video has no sound
};

/**
* This object represents a sticker.
*/
export type Sticker = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  type: 'regular' | 'mask' | 'custom_emoji'; // Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
  width: Integer; // Sticker width
  height: Integer; // Sticker height
  is_animated: boolean; // True, if the sticker is animated
  is_video: boolean; // True, if the sticker is a video sticker
  thumbnail?: PhotoSize; // Optional. Sticker thumbnail in the .WEBP or .JPG format
  emoji?: string; // Optional. Emoji associated with the sticker
  set_name?: string; // Optional. Name of the sticker set to which the sticker belongs
  premium_animation?: File; // Optional. For premium regular stickers, premium animation for the sticker
  mask_position?: MaskPosition; // Optional. For mask stickers, the position where the mask should be placed
  custom_emoji_id?: string; // Optional. For custom emoji stickers, unique identifier of the custom emoji
  needs_repainting?: True; // Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
  file_size?: Integer; // Optional. File size in bytes
};

/**
* This object represents a sticker set.
*/
export type StickerSet = {
  name: string; // Sticker set name
  title: string; // Sticker set title
  sticker_type: 'regular' | 'mask' | 'custom_emoji'; // Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”
  stickers: Sticker[]; // List of all set stickers
  thumbnail?: PhotoSize; // Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
};

/**
* This object describes the position on faces where a mask should be placed by default.
*/
export type MaskPosition = {
  point: string; // The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
  x_shift: Float; // Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
  y_shift: Float; // Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
  scale: Float; // Mask scaling coefficient. For example, 2.0 means double size.
};

/**
* This object describes a sticker to be added to a sticker set.
*/
export type InputSticker = {
  sticker: string; // The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new file using multipart/form-data under &lt;file_attach_name&gt; name. Animated and video stickers can&#39;t be uploaded via HTTP URL. More information on Sending Files »
  format: 'static' | 'animated' | 'video'; // Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a .WEBM video
  emoji_list: string[]; // List of 1-20 emoji associated with the sticker
  mask_position?: MaskPosition; // Optional. Position where the mask should be placed on faces. For “mask” stickers only.
  keywords?: string[]; // Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.
};

/**
* This object represents an incoming inline query. When the user sends an empty query, your bot
* could return some default or trending results.
*/
export type InlineQuery = {
  id: string; // Unique identifier for this query
  from: User; // Sender
  query: string; // Text of the query (up to 256 characters)
  offset: string; // Offset of the results to be returned, can be controlled by the bot
  chat_type?: string; // Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
  location?: Location; // Optional. Sender location, only for bots that request user location
};

/**
* This object represents a button to be shown above inline query results. You must use exactly one
* of the optional fields.
*/
export type InlineQueryResultsButton = {
  text: string; // Label text on the button
  web_app?: WebAppInfo; // Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
  start_parameter?: string; // Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a &#39;Connect your YouTube account&#39; button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot&#39;s inline capabilities.
};

/**
* This object represents one result of an inline query. Telegram clients currently support results
* of the following 20 types:
*/
export type InlineQueryResult = InlineQueryResultCachedAudio |
  InlineQueryResultCachedDocument |
  InlineQueryResultCachedGif |
  InlineQueryResultCachedMpeg4Gif |
  InlineQueryResultCachedPhoto |
  InlineQueryResultCachedSticker |
  InlineQueryResultCachedVideo |
  InlineQueryResultCachedVoice |
  InlineQueryResultArticle |
  InlineQueryResultAudio |
  InlineQueryResultContact |
  InlineQueryResultGame |
  InlineQueryResultDocument |
  InlineQueryResultGif |
  InlineQueryResultLocation |
  InlineQueryResultMpeg4Gif |
  InlineQueryResultPhoto |
  InlineQueryResultVenue |
  InlineQueryResultVideo |
  InlineQueryResultVoice;

/**
* Represents a link to an article or web page.
*/
export type InlineQueryResultArticle = {
  type: 'article'; // Type of the result, must be article
  id: string; // Unique identifier for this result, 1-64 Bytes
  title: string; // Title of the result
  input_message_content: InputMessageContent; // Content of the message to be sent
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  url?: string; // Optional. URL of the result
  description?: string; // Optional. Short description of the result
  thumbnail_url?: string; // Optional. Url of the thumbnail for the result
  thumbnail_width?: Integer; // Optional. Thumbnail width
  thumbnail_height?: Integer; // Optional. Thumbnail height
};

/**
* Represents a link to a photo. By default, this photo will be sent by the user with optional
* caption. Alternatively, you can use input_message_content to send a message with the specified
* content instead of the photo.
*/
export type InlineQueryResultPhoto = {
  type: 'photo'; // Type of the result, must be photo
  id: string; // Unique identifier for this result, 1-64 bytes
  photo_url: string; // A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB
  thumbnail_url: string; // URL of the thumbnail for the photo
  photo_width?: Integer; // Optional. Width of the photo
  photo_height?: Integer; // Optional. Height of the photo
  title?: string; // Optional. Title for the result
  description?: string; // Optional. Short description of the result
  caption?: string; // Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the photo
};

/**
* Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the
* user with optional caption. Alternatively, you can use input_message_content to send a message
* with the specified content instead of the animation.
*/
export type InlineQueryResultGif = {
  type: 'gif'; // Type of the result, must be gif
  id: string; // Unique identifier for this result, 1-64 bytes
  gif_url: string; // A valid URL for the GIF file
  gif_width?: Integer; // Optional. Width of the GIF
  gif_height?: Integer; // Optional. Height of the GIF
  gif_duration?: Integer; // Optional. Duration of the GIF in seconds
  thumbnail_url: string; // URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
  thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4'; // Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
  title?: string; // Optional. Title for the result
  caption?: string; // Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the GIF animation
};

/**
* Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this
* animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use
* input_message_content to send a message with the specified content instead of the animation.
*/
export type InlineQueryResultMpeg4Gif = {
  type: 'mpeg4_gif'; // Type of the result, must be mpeg4_gif
  id: string; // Unique identifier for this result, 1-64 bytes
  mpeg4_url: string; // A valid URL for the MPEG4 file
  mpeg4_width?: Integer; // Optional. Video width
  mpeg4_height?: Integer; // Optional. Video height
  mpeg4_duration?: Integer; // Optional. Video duration in seconds
  thumbnail_url: string; // URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
  thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4'; // Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
  title?: string; // Optional. Title for the result
  caption?: string; // Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the video animation
};

/**
* Represents a link to a page containing an embedded video player or a video file. By default, this
* video file will be sent by the user with an optional caption. Alternatively, you can use
* input_message_content to send a message with the specified content instead of the video.
* If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace
* its content using input_message_content.
*/
export type InlineQueryResultVideo = {
  type: 'video'; // Type of the result, must be video
  id: string; // Unique identifier for this result, 1-64 bytes
  video_url: string; // A valid URL for the embedded video player or video file
  mime_type: string; // MIME type of the content of the video URL, “text/html” or “video/mp4”
  thumbnail_url: string; // URL of the thumbnail (JPEG only) for the video
  title: string; // Title for the result
  caption?: string; // Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  video_width?: Integer; // Optional. Video width
  video_height?: Integer; // Optional. Video height
  video_duration?: Integer; // Optional. Video duration in seconds
  description?: string; // Optional. Short description of the result
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
};

/**
* Represents a link to an MP3 audio file. By default, this audio file will be sent by the user.
* Alternatively, you can use input_message_content to send a message with the specified content
* instead of the audio.
*/
export type InlineQueryResultAudio = {
  type: 'audio'; // Type of the result, must be audio
  id: string; // Unique identifier for this result, 1-64 bytes
  audio_url: string; // A valid URL for the audio file
  title: string; // Title
  caption?: string; // Optional. Caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  performer?: string; // Optional. Performer
  audio_duration?: Integer; // Optional. Audio duration in seconds
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the audio
};

/**
* Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this
* voice recording will be sent by the user. Alternatively, you can use input_message_content to send
* a message with the specified content instead of the the voice message.
*/
export type InlineQueryResultVoice = {
  type: 'voice'; // Type of the result, must be voice
  id: string; // Unique identifier for this result, 1-64 bytes
  voice_url: string; // A valid URL for the voice recording
  title: string; // Recording title
  caption?: string; // Optional. Caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  voice_duration?: Integer; // Optional. Recording duration in seconds
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the voice recording
};

/**
* Represents a link to a file. By default, this file will be sent by the user with an optional
* caption. Alternatively, you can use input_message_content to send a message with the specified
* content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
*/
export type InlineQueryResultDocument = {
  type: 'document'; // Type of the result, must be document
  id: string; // Unique identifier for this result, 1-64 bytes
  title: string; // Title for the result
  caption?: string; // Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  document_url: string; // A valid URL for the file
  mime_type: string; // MIME type of the content of the file, either “application/pdf” or “application/zip”
  description?: string; // Optional. Short description of the result
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the file
  thumbnail_url?: string; // Optional. URL of the thumbnail (JPEG only) for the file
  thumbnail_width?: Integer; // Optional. Thumbnail width
  thumbnail_height?: Integer; // Optional. Thumbnail height
};

/**
* Represents a location on a map. By default, the location will be sent by the user. Alternatively,
* you can use input_message_content to send a message with the specified content instead of the
* location.
*/
export type InlineQueryResultLocation = {
  type: 'location'; // Type of the result, must be location
  id: string; // Unique identifier for this result, 1-64 Bytes
  latitude: Float; // Location latitude in degrees
  longitude: Float; // Location longitude in degrees
  title: string; // Location title
  horizontal_accuracy?: Float; // Optional. The radius of uncertainty for the location, measured in meters; 0-1500
  live_period?: Integer; // Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
  heading?: Integer; // Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  proximity_alert_radius?: Integer; // Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the location
  thumbnail_url?: string; // Optional. Url of the thumbnail for the result
  thumbnail_width?: Integer; // Optional. Thumbnail width
  thumbnail_height?: Integer; // Optional. Thumbnail height
};

/**
* Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use
* input_message_content to send a message with the specified content instead of the venue.
*/
export type InlineQueryResultVenue = {
  type: 'venue'; // Type of the result, must be venue
  id: string; // Unique identifier for this result, 1-64 Bytes
  latitude: Float; // Latitude of the venue location in degrees
  longitude: Float; // Longitude of the venue location in degrees
  title: string; // Title of the venue
  address: string; // Address of the venue
  foursquare_id?: string; // Optional. Foursquare identifier of the venue if known
  foursquare_type?: string; // Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  google_place_id?: string; // Optional. Google Places identifier of the venue
  google_place_type?: string; // Optional. Google Places type of the venue. (See supported types.)
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the venue
  thumbnail_url?: string; // Optional. Url of the thumbnail for the result
  thumbnail_width?: Integer; // Optional. Thumbnail width
  thumbnail_height?: Integer; // Optional. Thumbnail height
};

/**
* Represents a contact with a phone number. By default, this contact will be sent by the user.
* Alternatively, you can use input_message_content to send a message with the specified content
* instead of the contact.
*/
export type InlineQueryResultContact = {
  type: 'contact'; // Type of the result, must be contact
  id: string; // Unique identifier for this result, 1-64 Bytes
  phone_number: string; // Contact&#39;s phone number
  first_name: string; // Contact&#39;s first name
  last_name?: string; // Optional. Contact&#39;s last name
  vcard?: string; // Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the contact
  thumbnail_url?: string; // Optional. Url of the thumbnail for the result
  thumbnail_width?: Integer; // Optional. Thumbnail width
  thumbnail_height?: Integer; // Optional. Thumbnail height
};

/**
* Represents a Game.
*/
export type InlineQueryResultGame = {
  type: 'game'; // Type of the result, must be game
  id: string; // Unique identifier for this result, 1-64 bytes
  game_short_name: string; // Short name of the game
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
};

/**
* Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent
* by the user with an optional caption. Alternatively, you can use input_message_content to send a
* message with the specified content instead of the photo.
*/
export type InlineQueryResultCachedPhoto = {
  type: 'photo'; // Type of the result, must be photo
  id: string; // Unique identifier for this result, 1-64 bytes
  photo_file_id: string; // A valid file identifier of the photo
  title?: string; // Optional. Title for the result
  description?: string; // Optional. Short description of the result
  caption?: string; // Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the photo
};

/**
* Represents a link to an animated GIF file stored on the Telegram servers. By default, this
* animated GIF file will be sent by the user with an optional caption. Alternatively, you can use
* input_message_content to send a message with specified content instead of the animation.
*/
export type InlineQueryResultCachedGif = {
  type: 'gif'; // Type of the result, must be gif
  id: string; // Unique identifier for this result, 1-64 bytes
  gif_file_id: string; // A valid file identifier for the GIF file
  title?: string; // Optional. Title for the result
  caption?: string; // Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the GIF animation
};

/**
* Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the
* Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional
* caption. Alternatively, you can use input_message_content to send a message with the specified
* content instead of the animation.
*/
export type InlineQueryResultCachedMpeg4Gif = {
  type: 'mpeg4_gif'; // Type of the result, must be mpeg4_gif
  id: string; // Unique identifier for this result, 1-64 bytes
  mpeg4_file_id: string; // A valid file identifier for the MPEG4 file
  title?: string; // Optional. Title for the result
  caption?: string; // Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the video animation
};

/**
* Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be
* sent by the user. Alternatively, you can use input_message_content to send a message with the
* specified content instead of the sticker.
*/
export type InlineQueryResultCachedSticker = {
  type: 'sticker'; // Type of the result, must be sticker
  id: string; // Unique identifier for this result, 1-64 bytes
  sticker_file_id: string; // A valid file identifier of the sticker
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the sticker
};

/**
* Represents a link to a file stored on the Telegram servers. By default, this file will be sent by
* the user with an optional caption. Alternatively, you can use input_message_content to send a
* message with the specified content instead of the file.
*/
export type InlineQueryResultCachedDocument = {
  type: 'document'; // Type of the result, must be document
  id: string; // Unique identifier for this result, 1-64 bytes
  title: string; // Title for the result
  document_file_id: string; // A valid file identifier for the file
  description?: string; // Optional. Short description of the result
  caption?: string; // Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the file
};

/**
* Represents a link to a video file stored on the Telegram servers. By default, this video file will
* be sent by the user with an optional caption. Alternatively, you can use input_message_content to
* send a message with the specified content instead of the video.
*/
export type InlineQueryResultCachedVideo = {
  type: 'video'; // Type of the result, must be video
  id: string; // Unique identifier for this result, 1-64 bytes
  video_file_id: string; // A valid file identifier for the video file
  title: string; // Title for the result
  description?: string; // Optional. Short description of the result
  caption?: string; // Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the video
};

/**
* Represents a link to a voice message stored on the Telegram servers. By default, this voice
* message will be sent by the user. Alternatively, you can use input_message_content to send a
* message with the specified content instead of the voice message.
*/
export type InlineQueryResultCachedVoice = {
  type: 'voice'; // Type of the result, must be voice
  id: string; // Unique identifier for this result, 1-64 bytes
  voice_file_id: string; // A valid file identifier for the voice message
  title: string; // Voice message title
  caption?: string; // Optional. Caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the voice message
};

/**
* Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file
* will be sent by the user. Alternatively, you can use input_message_content to send a message with
* the specified content instead of the audio.
*/
export type InlineQueryResultCachedAudio = {
  type: 'audio'; // Type of the result, must be audio
  id: string; // Unique identifier for this result, 1-64 bytes
  audio_file_id: string; // A valid file identifier for the audio file
  caption?: string; // Optional. Caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  reply_markup?: InlineKeyboardMarkup; // Optional. Inline keyboard attached to the message
  input_message_content?: InputMessageContent; // Optional. Content of the message to be sent instead of the audio
};

/**
* This object represents the content of a message to be sent as a result of an inline query.
* Telegram clients currently support the following 5 types:
*/
export type InputMessageContent = InputTextMessageContent |
  InputLocationMessageContent |
  InputVenueMessageContent |
  InputContactMessageContent |
  InputInvoiceMessageContent;

/**
* Represents the content of a text message to be sent as the result of an inline query.
*/
export type InputTextMessageContent = {
  message_text: string; // Text of the message to be sent, 1-4096 characters
  parse_mode?: string; // Optional. Mode for parsing entities in the message text. See formatting options for more details.
  entities?: MessageEntity[]; // Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
  link_preview_options?: LinkPreviewOptions; // Optional. Link preview generation options for the message
};

/**
* Represents the content of a location message to be sent as the result of an inline query.
*/
export type InputLocationMessageContent = {
  latitude: Float; // Latitude of the location in degrees
  longitude: Float; // Longitude of the location in degrees
  horizontal_accuracy?: Float; // Optional. The radius of uncertainty for the location, measured in meters; 0-1500
  live_period?: Integer; // Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
  heading?: Integer; // Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  proximity_alert_radius?: Integer; // Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
};

/**
* Represents the content of a venue message to be sent as the result of an inline query.
*/
export type InputVenueMessageContent = {
  latitude: Float; // Latitude of the venue in degrees
  longitude: Float; // Longitude of the venue in degrees
  title: string; // Name of the venue
  address: string; // Address of the venue
  foursquare_id?: string; // Optional. Foursquare identifier of the venue, if known
  foursquare_type?: string; // Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  google_place_id?: string; // Optional. Google Places identifier of the venue
  google_place_type?: string; // Optional. Google Places type of the venue. (See supported types.)
};

/**
* Represents the content of a contact message to be sent as the result of an inline query.
*/
export type InputContactMessageContent = {
  phone_number: string; // Contact&#39;s phone number
  first_name: string; // Contact&#39;s first name
  last_name?: string; // Optional. Contact&#39;s last name
  vcard?: string; // Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
};

/**
* Represents the content of an invoice message to be sent as the result of an inline query.
*/
export type InputInvoiceMessageContent = {
  title: string; // Product name, 1-32 characters
  description: string; // Product description, 1-255 characters
  payload: string; // Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
  provider_token?: string; // Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
  currency: string; // Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
  prices: LabeledPrice[]; // Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
  max_tip_amount?: Integer; // Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
  suggested_tip_amounts?: Integer[]; // Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
  provider_data?: string; // Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
  photo_url?: string; // Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
  photo_size?: Integer; // Optional. Photo size in bytes
  photo_width?: Integer; // Optional. Photo width
  photo_height?: Integer; // Optional. Photo height
  need_name?: boolean; // Optional. Pass True if you require the user&#39;s full name to complete the order. Ignored for payments in Telegram Stars.
  need_phone_number?: boolean; // Optional. Pass True if you require the user&#39;s phone number to complete the order. Ignored for payments in Telegram Stars.
  need_email?: boolean; // Optional. Pass True if you require the user&#39;s email address to complete the order. Ignored for payments in Telegram Stars.
  need_shipping_address?: boolean; // Optional. Pass True if you require the user&#39;s shipping address to complete the order. Ignored for payments in Telegram Stars.
  send_phone_number_to_provider?: boolean; // Optional. Pass True if the user&#39;s phone number should be sent to the provider. Ignored for payments in Telegram Stars.
  send_email_to_provider?: boolean; // Optional. Pass True if the user&#39;s email address should be sent to the provider. Ignored for payments in Telegram Stars.
  is_flexible?: boolean; // Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
};

/**
* Represents a result of an inline query that was chosen by the user and sent to their chat partner.
*/
export type ChosenInlineResult = {
  result_id: string; // The unique identifier for the result that was chosen
  from: User; // The user that chose the result
  location?: Location; // Optional. Sender location, only for bots that require user location
  inline_message_id?: string; // Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
  query: string; // The query that was used to obtain the result
};

/**
* Describes an inline message sent by a Web App on behalf of a user.
*/
export type SentWebAppMessage = {
  inline_message_id?: string; // Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
};

/**
* Describes an inline message to be sent by a user of a Mini App.
*/
export type PreparedInlineMessage = {
  id: string; // Unique identifier of the prepared message
  expiration_date: Integer; // Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used
};

/**
* This object represents a portion of the price for goods or services.
*/
export type LabeledPrice = {
  label: string; // Portion label
  amount: Integer; // Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
};

/**
* This object contains basic information about an invoice.
*/
export type Invoice = {
  title: string; // Product name
  description: string; // Product description
  start_parameter: string; // Unique bot deep-linking parameter that can be used to generate this invoice
  currency: string; // Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
  total_amount: Integer; // Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
};

/**
* This object represents a shipping address.
*/
export type ShippingAddress = {
  country_code: string; // Two-letter ISO 3166-1 alpha-2 country code
  state: string; // State, if applicable
  city: string; // City
  street_line1: string; // First line for the address
  street_line2: string; // Second line for the address
  post_code: string; // Address post code
};

/**
* This object represents information about an order.
*/
export type OrderInfo = {
  name?: string; // Optional. User name
  phone_number?: string; // Optional. User&#39;s phone number
  email?: string; // Optional. User email
  shipping_address?: ShippingAddress; // Optional. User shipping address
};

/**
* This object represents one shipping option.
*/
export type ShippingOption = {
  id: string; // Shipping option identifier
  title: string; // Option title
  prices: LabeledPrice[]; // List of price portions
};

/**
* This object contains basic information about a successful payment. Note that if the buyer
* initiates a chargeback with the relevant payment provider following this transaction, the funds
* may be debited from your balance. This is outside of Telegram&#39;s control.
*/
export type SuccessfulPayment = {
  currency: string; // Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
  total_amount: Integer; // Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  invoice_payload: string; // Bot-specified invoice payload
  subscription_expiration_date?: Integer; // Optional. Expiration date of the subscription, in Unix time; for recurring payments only
  is_recurring?: True; // Optional. True, if the payment is a recurring payment for a subscription
  is_first_recurring?: True; // Optional. True, if the payment is the first payment for a subscription
  shipping_option_id?: string; // Optional. Identifier of the shipping option chosen by the user
  order_info?: OrderInfo; // Optional. Order information provided by the user
  telegram_payment_charge_id: string; // Telegram payment identifier
  provider_payment_charge_id: string; // Provider payment identifier
};

/**
* This object contains basic information about a refunded payment.
*/
export type RefundedPayment = {
  currency: 'XTR'; // Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR”
  total_amount: Integer; // Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  invoice_payload: string; // Bot-specified invoice payload
  telegram_payment_charge_id: string; // Telegram payment identifier
  provider_payment_charge_id?: string; // Optional. Provider payment identifier
};

/**
* This object contains information about an incoming shipping query.
*/
export type ShippingQuery = {
  id: string; // Unique query identifier
  from: User; // User who sent the query
  invoice_payload: string; // Bot-specified invoice payload
  shipping_address: ShippingAddress; // User specified shipping address
};

/**
* This object contains information about an incoming pre-checkout query.
*/
export type PreCheckoutQuery = {
  id: string; // Unique query identifier
  from: User; // User who sent the query
  currency: string; // Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
  total_amount: Integer; // Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  invoice_payload: string; // Bot-specified invoice payload
  shipping_option_id?: string; // Optional. Identifier of the shipping option chosen by the user
  order_info?: OrderInfo; // Optional. Order information provided by the user
};

/**
* This object contains information about a paid media purchase.
*/
export type PaidMediaPurchased = {
  from: User; // User who purchased the media
  paid_media_payload: string; // Bot-specified paid media payload
};

/**
* This object describes the state of a revenue withdrawal operation. Currently, it can be one of
*/
export type RevenueWithdrawalState = RevenueWithdrawalStatePending | RevenueWithdrawalStateSucceeded | RevenueWithdrawalStateFailed;

/**
* The withdrawal is in progress.
*/
export type RevenueWithdrawalStatePending = {
  type: 'pending'; // Type of the state, always “pending”
};

/**
* The withdrawal succeeded.
*/
export type RevenueWithdrawalStateSucceeded = {
  type: 'succeeded'; // Type of the state, always “succeeded”
  date: Integer; // Date the withdrawal was completed in Unix time
  url: string; // An HTTPS URL that can be used to see transaction details
};

/**
* The withdrawal failed and the transaction was refunded.
*/
export type RevenueWithdrawalStateFailed = {
  type: 'failed'; // Type of the state, always “failed”
};

/**
* Contains information about the affiliate that received a commission via this transaction.
*/
export type AffiliateInfo = {
  affiliate_user?: User; // Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user
  affiliate_chat?: Chat; // Optional. The chat that received an affiliate commission if it was received by a chat
  commission_per_mille: Integer; // The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users
  amount: Integer; // Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds
  nanostar_amount?: Integer; // Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds
};

/**
* This object describes the source of a transaction, or its recipient for outgoing transactions.
* Currently, it can be one of
*/
export type TransactionPartner = TransactionPartnerUser |
  TransactionPartnerChat |
  TransactionPartnerAffiliateProgram |
  TransactionPartnerFragment |
  TransactionPartnerTelegramAds |
  TransactionPartnerTelegramApi |
  TransactionPartnerOther;

/**
* Describes a transaction with a user.
*/
export type TransactionPartnerUser = {
  type: 'user'; // Type of the transaction partner, always “user”
  transaction_type: 'invoice_payment' | 'paid_media_payment' | 'gift_purchase' | 'premium_purchase' | 'business_account_transfer'; // Type of the transaction, currently one of “invoice_payment” for payments via invoices, “paid_media_payment” for payments for paid media, “gift_purchase” for gifts sent by the bot, “premium_purchase” for Telegram Premium subscriptions gifted by the bot, “business_account_transfer” for direct transfers from managed business accounts
  user: User; // Information about the user
  affiliate?: AffiliateInfo; // Optional. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice_payment” and “paid_media_payment” transactions.
  invoice_payload?: string; // Optional. Bot-specified invoice payload. Can be available only for “invoice_payment” transactions.
  subscription_period?: Integer; // Optional. The duration of the paid subscription. Can be available only for “invoice_payment” transactions.
  paid_media?: PaidMedia[]; // Optional. Information about the paid media bought by the user; for “paid_media_payment” transactions only
  paid_media_payload?: string; // Optional. Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions.
  gift?: Gift; // Optional. The gift sent to the user by the bot; for “gift_purchase” transactions only
  premium_subscription_duration?: Integer; // Optional. Number of months the gifted Telegram Premium subscription will be active for; for “premium_purchase” transactions only
};

/**
* Describes a transaction with a chat.
*/
export type TransactionPartnerChat = {
  type: 'chat'; // Type of the transaction partner, always “chat”
  chat: Chat; // Information about the chat
  gift?: Gift; // Optional. The gift sent to the chat by the bot
};

/**
* Describes the affiliate program that issued the affiliate commission received via this
* transaction.
*/
export type TransactionPartnerAffiliateProgram = {
  type: 'affiliate_program'; // Type of the transaction partner, always “affiliate_program”
  sponsor_user?: User; // Optional. Information about the bot that sponsored the affiliate program
  commission_per_mille: Integer; // The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users
};

/**
* Describes a withdrawal transaction with Fragment.
*/
export type TransactionPartnerFragment = {
  type: 'fragment'; // Type of the transaction partner, always “fragment”
  withdrawal_state?: RevenueWithdrawalState; // Optional. State of the transaction if the transaction is outgoing
};

/**
* Describes a withdrawal transaction to the Telegram Ads platform.
*/
export type TransactionPartnerTelegramAds = {
  type: 'telegram_ads'; // Type of the transaction partner, always “telegram_ads”
};

/**
* Describes a transaction with payment for paid broadcasting.
*/
export type TransactionPartnerTelegramApi = {
  type: 'telegram_api'; // Type of the transaction partner, always “telegram_api”
  request_count: Integer; // The number of successful requests that exceeded regular limits and were therefore billed
};

/**
* Describes a transaction with an unknown source or recipient.
*/
export type TransactionPartnerOther = {
  type: 'other'; // Type of the transaction partner, always “other”
};

/**
* Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the
* payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction,
* the refunded Stars will be deducted from the bot&#39;s balance. This is outside of Telegram&#39;s
* control.
*/
export type StarTransaction = {
  id: string; // Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.
  amount: Integer; // Integer amount of Telegram Stars transferred by the transaction
  nanostar_amount?: Integer; // Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999
  date: Integer; // Date the transaction was created in Unix time
  source?: TransactionPartner; // Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions
  receiver?: TransactionPartner; // Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions
};

/**
* Contains a list of Telegram Star transactions.
*/
export type StarTransactions = {
  transactions: StarTransaction[]; // The list of transactions
};

/**
* Describes Telegram Passport data shared with the bot by the user.
*/
export type PassportData = {
  data: EncryptedPassportElement[]; // Array with information about documents and other Telegram Passport elements that was shared with the bot
  credentials: EncryptedCredentials; // Encrypted credentials required to decrypt the data
};

/**
* This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files
* are in JPEG format when decrypted and don&#39;t exceed 10MB.
*/
export type PassportFile = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file.
  file_size: Integer; // File size in bytes
  file_date: Integer; // Unix time when the file was uploaded
};

/**
* Describes documents or other Telegram Passport elements shared with the bot by the user.
*/
export type EncryptedPassportElement = {
  type: string; // Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
  data?: string; // Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
  phone_number?: string; // Optional. User&#39;s verified phone number; available only for “phone_number” type
  email?: string; // Optional. User&#39;s verified email address; available only for “email” type
  files?: PassportFile[]; // Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  front_side?: PassportFile; // Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  reverse_side?: PassportFile; // Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  selfie?: PassportFile; // Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  translation?: PassportFile[]; // Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  hash: string; // Base64-encoded element hash for using in PassportElementErrorUnspecified
};

/**
* Describes data required for decrypting and authenticating EncryptedPassportElement. See the
* Telegram Passport Documentation for a complete description of the data decryption and
* authentication processes.
*/
export type EncryptedCredentials = {
  data: string; // Base64-encoded encrypted JSON-serialized data with unique user&#39;s payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
  hash: string; // Base64-encoded data hash for data authentication
  secret: string; // Base64-encoded secret, encrypted with the bot&#39;s public RSA key, required for data decryption
};

/**
* This object represents an error in the Telegram Passport element which was submitted that should
* be resolved by the user. It should be one of:
*/
export type PassportElementError = PassportElementErrorDataField |
  PassportElementErrorFrontSide |
  PassportElementErrorReverseSide |
  PassportElementErrorSelfie |
  PassportElementErrorFile |
  PassportElementErrorFiles |
  PassportElementErrorTranslationFile |
  PassportElementErrorTranslationFiles |
  PassportElementErrorUnspecified;

/**
* Represents an issue in one of the data fields that was provided by the user. The error is
* considered resolved when the field&#39;s value changes.
*/
export type PassportElementErrorDataField = {
  source: 'data'; // Error source, must be data
  type: 'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address'; // The section of the user&#39;s Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
  field_name: string; // Name of the data field which has the error
  data_hash: string; // Base64-encoded data hash
  message: string; // Error message
};

/**
* Represents an issue with the front side of a document. The error is considered resolved when the
* file with the front side of the document changes.
*/
export type PassportElementErrorFrontSide = {
  source: 'front_side'; // Error source, must be front_side
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport'; // The section of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
  file_hash: string; // Base64-encoded hash of the file with the front side of the document
  message: string; // Error message
};

/**
* Represents an issue with the reverse side of a document. The error is considered resolved when the
* file with reverse side of the document changes.
*/
export type PassportElementErrorReverseSide = {
  source: 'reverse_side'; // Error source, must be reverse_side
  type: 'driver_license' | 'identity_card'; // The section of the user&#39;s Telegram Passport which has the issue, one of “driver_license”, “identity_card”
  file_hash: string; // Base64-encoded hash of the file with the reverse side of the document
  message: string; // Error message
};

/**
* Represents an issue with the selfie with a document. The error is considered resolved when the
* file with the selfie changes.
*/
export type PassportElementErrorSelfie = {
  source: 'selfie'; // Error source, must be selfie
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport'; // The section of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
  file_hash: string; // Base64-encoded hash of the file with the selfie
  message: string; // Error message
};

/**
* Represents an issue with a document scan. The error is considered resolved when the file with the
* document scan changes.
*/
export type PassportElementErrorFile = {
  source: 'file'; // Error source, must be file
  type: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration'; // The section of the user&#39;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  file_hash: string; // Base64-encoded file hash
  message: string; // Error message
};

/**
* Represents an issue with a list of scans. The error is considered resolved when the list of files
* containing the scans changes.
*/
export type PassportElementErrorFiles = {
  source: 'files'; // Error source, must be files
  type: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration'; // The section of the user&#39;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  file_hashes: string[]; // List of base64-encoded file hashes
  message: string; // Error message
};

/**
* Represents an issue with one of the files that constitute the translation of a document. The error
* is considered resolved when the file changes.
*/
export type PassportElementErrorTranslationFile = {
  source: 'translation_file'; // Error source, must be translation_file
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration'; // Type of element of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  file_hash: string; // Base64-encoded file hash
  message: string; // Error message
};

/**
* Represents an issue with the translated version of a document. The error is considered resolved
* when a file with the document translation change.
*/
export type PassportElementErrorTranslationFiles = {
  source: 'translation_files'; // Error source, must be translation_files
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration'; // Type of element of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
  file_hashes: string[]; // List of base64-encoded file hashes
  message: string; // Error message
};

/**
* Represents an issue in an unspecified place. The error is considered resolved when new data is
* added.
*/
export type PassportElementErrorUnspecified = {
  source: 'unspecified'; // Error source, must be unspecified
  type: string; // Type of element of the user&#39;s Telegram Passport which has the issue
  element_hash: string; // Base64-encoded element hash
  message: string; // Error message
};

/**
* This object represents a game. Use BotFather to create and edit games, their short names will act
* as unique identifiers.
*/
export type Game = {
  title: string; // Title of the game
  description: string; // Description of the game
  photo: PhotoSize[]; // Photo that will be displayed in the game message in chats.
  text?: string; // Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
  text_entities?: MessageEntity[]; // Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
  animation?: Animation; // Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
};

/**
* A placeholder, currently holds no information. Use BotFather to set up your game.
*/
export type CallbackGame = {};

/**
* This object represents one row of the high scores table for a game.
*/
export type GameHighScore = {
  position: Integer; // Position in high score table for the game
  user: User; // User
  score: Integer; // Score
};

// ----------------------------
/**
* Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update
* objects.
*/
export type GetUpdatesData = {
  offset?: Integer; // Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
  limit?: Integer; // Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
  timeout?: Integer; // Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
  allowed_updates?: string[]; // A JSON-serialized list of the update types you want your bot to receive. For example, specify [&quot;message&quot;, &quot;edited_channel_post&quot;, &quot;callback_query&quot;] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn&#39;t affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.
};

/**
* Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever
* there is an update for the bot, we will send an HTTPS POST request to the specified URL,
* containing a JSON-serialized Update. In case of an unsuccessful request (a request with response
* HTTP status code different from 2XY), we will repeat the request and give up after a reasonable
* amount of attempts. Returns True on success.
* If you&#39;d like to make sure that the webhook was set by you, you can specify secret data in the
* parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret
* -Token” with the secret token as content.
*/
export type SetWebhookData = {
  url: string; // HTTPS URL to send updates to. Use an empty string to remove webhook integration
  certificate?: InputFile; // Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
  ip_address?: string; // The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
  max_connections?: Integer; // The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot&#39;s server, and higher values to increase your bot&#39;s throughput.
  allowed_updates?: string[]; // A JSON-serialized list of the update types you want your bot to receive. For example, specify [&quot;message&quot;, &quot;edited_channel_post&quot;, &quot;callback_query&quot;] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn&#39;t affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
  drop_pending_updates?: boolean; // Pass True to drop all pending updates
  secret_token?: string; // A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
};

/**
* Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns
* True on success.
*/
export type DeleteWebhookData = {
  drop_pending_updates?: boolean; // Pass True to drop all pending updates
};

/**
* Use this method to get current webhook status. Requires no parameters. On success, returns a
* WebhookInfo object. If the bot is using getUpdates, will return an object with the url field
* empty.
*/
export type GetWebhookInfoData = void;

/**
* A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns
* basic information about the bot in form of a User object.
*/
export type GetMeData = void;

/**
* Use this method to log out from the cloud Bot API server before launching the bot locally. You
* must log out the bot before running it locally, otherwise there is no guarantee that the bot will
* receive updates. After a successful call, you can immediately log in on a local server, but will
* not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success.
* Requires no parameters.
*/
export type LogOutData = void;

/**
* Use this method to close the bot instance before moving it from one local server to another. You
* need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched
* again after server restart. The method will return error 429 in the first 10 minutes after the bot
* is launched. Returns True on success. Requires no parameters.
*/
export type CloseData = void;

/**
* Use this method to send text messages. On success, the sent Message is returned.
*/
export type SendMessageData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  text: string; // Text of the message to be sent, 1-4096 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the message text. See formatting options for more details.
  entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
  link_preview_options?: LinkPreviewOptions; // Link preview generation options for the message
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to forward messages of any kind. Service messages and messages with protected
* content can&#39;t be forwarded. On success, the sent Message is returned.
*/
export type ForwardMessageData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat
  from_chat_id: Integer | string; // Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
  video_start_timestamp?: Integer; // New start timestamp for the forwarded video in the message
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the forwarded message from forwarding and saving
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only
  message_id: Integer; // Message identifier in the chat specified in from_chat_id
};

/**
* Use this method to forward multiple messages of any kind. If some of the specified messages
* can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected
* content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an
* array of MessageId of the sent messages is returned.
*/
export type ForwardMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat
  from_chat_id: Integer | string; // Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
  message_ids: Integer[]; // A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
  disable_notification?: boolean; // Sends the messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the forwarded messages from forwarding and saving
};

/**
* Use this method to copy messages of any kind. Service messages, paid media messages, giveaway
* messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be
* copied only if the value of the field correct_option_id is known to the bot. The method is
* analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the
* original message. Returns the MessageId of the sent message on success.
*/
export type CopyMessageData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  from_chat_id: Integer | string; // Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
  message_id: Integer; // Message identifier in the chat specified in from_chat_id
  video_start_timestamp?: Integer; // New start timestamp for the copied video in the message
  caption?: string; // New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
  parse_mode?: string; // Mode for parsing entities in the new caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media. Ignored if a new caption isn&#39;t specified.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found
* or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway
* winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the
* value of the field correct_option_id is known to the bot. The method is analogous to the method
* forwardMessages, but the copied messages don&#39;t have a link to the original message. Album
* grouping is kept for copied messages. On success, an array of MessageId of the sent messages is
* returned.
*/
export type CopyMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat
  from_chat_id: Integer | string; // Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
  message_ids: Integer[]; // A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
  disable_notification?: boolean; // Sends the messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent messages from forwarding and saving
  remove_caption?: boolean; // Pass True to copy the messages without their captions
};

/**
* Use this method to send photos. On success, the sent Message is returned.
*/
export type SendPhotoData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  photo: InputFile | string; // Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo&#39;s width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
  caption?: string; // Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Pass True if the photo needs to be covered with a spoiler animation
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send audio files, if you want Telegram clients to display them in the music
* player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned.
* Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the
* future.
* For sending voice messages, use the sendVoice method instead.
*/
export type SendAudioData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  audio: InputFile | string; // Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  caption?: string; // Audio caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: Integer; // Duration of the audio in seconds
  performer?: string; // Performer
  title?: string; // Track name
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send general files. On success, the sent Message is returned. Bots can
* currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
*/
export type SendDocumentData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  document: InputFile | string; // File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  caption?: string; // Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  disable_content_type_detection?: boolean; // Disables automatic server-side content type detection for files uploaded using multipart/form-data
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be
* sent as Document). On success, the sent Message is returned. Bots can currently send video files
* of up to 50 MB in size, this limit may be changed in the future.
*/
export type SendVideoData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  video: InputFile | string; // Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
  duration?: Integer; // Duration of sent video in seconds
  width?: Integer; // Video width
  height?: Integer; // Video height
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  cover?: InputFile | string; // Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. More information on Sending Files »
  start_timestamp?: Integer; // Start timestamp for the video in the message
  caption?: string; // Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Pass True if the video needs to be covered with a spoiler animation
  supports_streaming?: boolean; // Pass True if the uploaded video is suitable for streaming
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success,
* the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this
* limit may be changed in the future.
*/
export type SendAnimationData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  animation: InputFile | string; // Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
  duration?: Integer; // Duration of sent animation in seconds
  width?: Integer; // Animation width
  height?: Integer; // Animation height
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  caption?: string; // Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the animation caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Pass True if the animation needs to be covered with a spoiler animation
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send audio files, if you want Telegram clients to display the file as a
* playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or
* in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success,
* the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this
* limit may be changed in the future.
*/
export type SendVoiceData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  voice: InputFile | string; // Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  caption?: string; // Voice message caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the voice message caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: Integer; // Duration of the voice message in seconds
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this
* method to send video messages. On success, the sent Message is returned.
*/
export type SendVideoNoteData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  video_note: InputFile | string; // Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
  duration?: Integer; // Duration of sent video in seconds
  length?: Integer; // Video width and height, i.e. diameter of the video message
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail&#39;s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can&#39;t be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files »
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send paid media. On success, the sent Message is returned.
*/
export type SendPaidMediaData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat&#39;s balance. Otherwise, they will be credited to the bot&#39;s balance.
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  star_count: Integer; // The number of Telegram Stars that must be paid to buy access to the media; 1-10000
  media: InputPaidMedia[]; // A JSON-serialized array describing the media to be sent; up to 10 items
  payload?: string; // Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
  caption?: string; // Media caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the media caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a group of photos, videos, documents or audios as an album. Documents and
* audio files can be only grouped in an album with messages of the same type. On success, an array
* of Message objects that were sent is returned.
*/
export type SendMediaGroupData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat
  media: Array<InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo>; // A JSON-serialized array describing messages to be sent, must include 2-10 items
  disable_notification?: boolean; // Sends messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent messages from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
};

/**
* Use this method to send point on the map. On success, the sent Message is returned.
*/
export type SendLocationData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  latitude: Float; // Latitude of the location
  longitude: Float; // Longitude of the location
  horizontal_accuracy?: Float; // The radius of uncertainty for the location, measured in meters; 0-1500
  live_period?: Integer; // Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
  heading?: Integer; // For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  proximity_alert_radius?: Integer; // For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send information about a venue. On success, the sent Message is returned.
*/
export type SendVenueData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  latitude: Float; // Latitude of the venue
  longitude: Float; // Longitude of the venue
  title: string; // Name of the venue
  address: string; // Address of the venue
  foursquare_id?: string; // Foursquare identifier of the venue
  foursquare_type?: string; // Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  google_place_id?: string; // Google Places identifier of the venue
  google_place_type?: string; // Google Places type of the venue. (See supported types.)
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send phone contacts. On success, the sent Message is returned.
*/
export type SendContactData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  phone_number: string; // Contact&#39;s phone number
  first_name: string; // Contact&#39;s first name
  last_name?: string; // Contact&#39;s last name
  vcard?: string; // Additional data about the contact in the form of a vCard, 0-2048 bytes
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a native poll. On success, the sent Message is returned.
*/
export type SendPollData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can&#39;t be sent to channel direct messages chats.
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  question: string; // Poll question, 1-300 characters
  question_parse_mode?: string; // Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
  question_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
  options: InputPollOption[]; // A JSON-serialized list of 2-12 answer options
  is_anonymous?: boolean; // True, if the poll needs to be anonymous, defaults to True
  type?: string; // Poll type, “quiz” or “regular”, defaults to “regular”
  allows_multiple_answers?: boolean; // True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
  correct_option_id?: Integer; // 0-based identifier of the correct answer option, required for polls in quiz mode
  explanation?: string; // Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
  explanation_parse_mode?: string; // Mode for parsing entities in the explanation. See formatting options for more details.
  explanation_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
  open_period?: Integer; // Amount of time in seconds the poll will be active after creation, 5-600. Can&#39;t be used together with close_date.
  close_date?: Integer; // Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can&#39;t be used together with open_period.
  is_closed?: boolean; // Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a checklist on behalf of a connected business account. On success, the
* sent Message is returned.
*/
export type SendChecklistData = {
  business_connection_id: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer; // Unique identifier for the target chat
  checklist: InputChecklist; // A JSON-serialized object for the checklist to send
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message
  reply_parameters?: ReplyParameters; // A JSON-serialized object for description of the message to reply to
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard
};

/**
* Use this method to send an animated emoji that will display a random value. On success, the sent
* Message is returned.
*/
export type SendDiceData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  emoji?: string; // Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “”
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method when you need to tell the user that something is happening on the bot&#39;s side.
* The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients
* clear its typing status). Returns True on success.
* Example: The ImageBot needs some time to process a request and upload the image. Instead of
* sending a text message along the lines of “Retrieving image, please wait…”, the bot may use
* sendChatAction with action = upload_photo. The user will see a “sending photo” status for the bot.
* We only recommend using this method when a response from the bot will take a noticeable amount of
* time to arrive.
*/
export type SendChatActionData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the action will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren&#39;t supported.
  message_thread_id?: Integer; // Unique identifier for the target message thread; for supergroups only
  action: string; // Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
};

/**
* Use this method to change the chosen reactions on a message. Service messages of some types
* can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group
* have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions.
* Returns True on success.
*/
export type SetMessageReactionData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id: Integer; // Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
  reaction?: ReactionType[]; // A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can&#39;t be used by bots.
  is_big?: boolean; // Pass True to set the reaction with a big animation
};

/**
* Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
*/
export type GetUserProfilePhotosData = {
  user_id: Integer; // Unique identifier of the target user
  offset?: Integer; // Sequential number of the first photo to be returned. By default, all photos are returned.
  limit?: Integer; // Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
};

/**
* Changes the emoji status for a given user that previously allowed the bot to manage their emoji
* status via the Mini App method requestEmojiStatusAccess. Returns True on success.
*/
export type SetUserEmojiStatusData = {
  user_id: Integer; // Unique identifier of the target user
  emoji_status_custom_emoji_id?: string; // Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
  emoji_status_expiration_date?: Integer; // Expiration date of the emoji status, if any
};

/**
* Use this method to get basic information about a file and prepare it for downloading. For the
* moment, bots can download files of up to 20MB in size. On success, a File object is returned. The
* file can then be downloaded via the link
* https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;, where &lt;file_path&gt; is taken
* from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link
* expires, a new one can be requested by calling getFile again.
*/
export type GetFileData = {
  file_id: string; // File identifier to get information about
};

/**
* Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups
* and channels, the user will not be able to return to the chat on their own using invite links,
* etc., unless unbanned first. The bot must be an administrator in the chat for this to work and
* must have the appropriate administrator rights. Returns True on success.
*/
export type BanChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
  until_date?: Integer; // Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
  revoke_messages?: boolean; // Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
};

/**
* Use this method to unban a previously banned user in a supergroup or channel. The user will not
* return to the group or channel automatically, but will be able to join via link, etc. The bot must
* be an administrator for this to work. By default, this method guarantees that after the call the
* user is not a member of the chat, but will be able to join it. So if the user is a member of the
* chat they will also be removed from the chat. If you don&#39;t want this, use the parameter
* only_if_banned. Returns True on success.
*/
export type UnbanChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
  only_if_banned?: boolean; // Do nothing if the user is not banned
};

/**
* Use this method to restrict a user in a supergroup. The bot must be an administrator in the
* supergroup for this to work and must have the appropriate administrator rights. Pass True for all
* permissions to lift restrictions from a user. Returns True on success.
*/
export type RestrictChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  user_id: Integer; // Unique identifier of the target user
  permissions: ChatPermissions; // A JSON-serialized object for new user permissions
  use_independent_chat_permissions?: boolean; // Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
  until_date?: Integer; // Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
};

/**
* Use this method to promote or demote a user in a supergroup or a channel. The bot must be an
* administrator in the chat for this to work and must have the appropriate administrator rights.
* Pass False for all boolean parameters to demote a user. Returns True on success.
*/
export type PromoteChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
  is_anonymous?: boolean; // Pass True if the administrator&#39;s presence in the chat is hidden
  can_manage_chat?: boolean; // Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
  can_delete_messages?: boolean; // Pass True if the administrator can delete messages of other users
  can_manage_video_chats?: boolean; // Pass True if the administrator can manage video chats
  can_restrict_members?: boolean; // Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
  can_promote_members?: boolean; // Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
  can_change_info?: boolean; // Pass True if the administrator can change chat title, photo and other settings
  can_invite_users?: boolean; // Pass True if the administrator can invite new users to the chat
  can_post_stories?: boolean; // Pass True if the administrator can post stories to the chat
  can_edit_stories?: boolean; // Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat&#39;s story archive
  can_delete_stories?: boolean; // Pass True if the administrator can delete stories posted by other users
  can_post_messages?: boolean; // Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
  can_edit_messages?: boolean; // Pass True if the administrator can edit messages of other users and can pin messages; for channels only
  can_pin_messages?: boolean; // Pass True if the administrator can pin messages; for supergroups only
  can_manage_topics?: boolean; // Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
  can_manage_direct_messages?: boolean; // Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only
};

/**
* Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
* Returns True on success.
*/
export type SetChatAdministratorCustomTitleData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  user_id: Integer; // Unique identifier of the target user
  custom_title: string; // New custom title for the administrator; 0-16 characters, emoji are not allowed
};

/**
* Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned,
* the owner of the banned chat won&#39;t be able to send messages on behalf of any of their
* channels. The bot must be an administrator in the supergroup or channel for this to work and must
* have the appropriate administrator rights. Returns True on success.
*/
export type BanChatSenderChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  sender_chat_id: Integer; // Unique identifier of the target sender chat
};

/**
* Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must
* be an administrator for this to work and must have the appropriate administrator rights. Returns
* True on success.
*/
export type UnbanChatSenderChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  sender_chat_id: Integer; // Unique identifier of the target sender chat
};

/**
* Use this method to set default chat permissions for all members. The bot must be an administrator
* in the group or a supergroup for this to work and must have the can_restrict_members administrator
* rights. Returns True on success.
*/
export type SetChatPermissionsData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  permissions: ChatPermissions; // A JSON-serialized object for new default chat permissions
  use_independent_chat_permissions?: boolean; // Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
};

/**
* Use this method to generate a new primary invite link for a chat; any previously generated primary
* link is revoked. The bot must be an administrator in the chat for this to work and must have the
* appropriate administrator rights. Returns the new invite link as String on success.
*/
export type ExportChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method to create an additional invite link for a chat. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. The link can be
* revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink
* object.
*/
export type CreateChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  name?: string; // Invite link name; 0-32 characters
  expire_date?: Integer; // Point in time (Unix timestamp) when the link will expire
  member_limit?: Integer; // The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  creates_join_request?: boolean; // True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can&#39;t be specified
};

/**
* Use this method to edit a non-primary invite link created by the bot. The bot must be an
* administrator in the chat for this to work and must have the appropriate administrator rights.
* Returns the edited invite link as a ChatInviteLink object.
*/
export type EditChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to edit
  name?: string; // Invite link name; 0-32 characters
  expire_date?: Integer; // Point in time (Unix timestamp) when the link will expire
  member_limit?: Integer; // The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  creates_join_request?: boolean; // True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can&#39;t be specified
};

/**
* Use this method to create a subscription invite link for a channel chat. The bot must have the
* can_invite_users administrator rights. The link can be edited using the method
* editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new
* invite link as a ChatInviteLink object.
*/
export type CreateChatSubscriptionInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
  name?: string; // Invite link name; 0-32 characters
  subscription_period: Integer; // The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
  subscription_price: Integer; // The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
};

/**
* Use this method to edit a subscription invite link created by the bot. The bot must have the
* can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
*/
export type EditChatSubscriptionInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to edit
  name?: string; // Invite link name; 0-32 characters
};

/**
* Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new
* link is automatically generated. The bot must be an administrator in the chat for this to work and
* must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink
* object.
*/
export type RevokeChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier of the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to revoke
};

/**
* Use this method to approve a chat join request. The bot must be an administrator in the chat for
* this to work and must have the can_invite_users administrator right. Returns True on success.
*/
export type ApproveChatJoinRequestData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to decline a chat join request. The bot must be an administrator in the chat for
* this to work and must have the can_invite_users administrator right. Returns True on success.
*/
export type DeclineChatJoinRequestData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private
* chats. The bot must be an administrator in the chat for this to work and must have the appropriate
* administrator rights. Returns True on success.
*/
export type SetChatPhotoData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  photo: InputFile; // New chat photo, uploaded using multipart/form-data
};

/**
* Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot
* must be an administrator in the chat for this to work and must have the appropriate administrator
* rights. Returns True on success.
*/
export type DeleteChatPhotoData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The
* bot must be an administrator in the chat for this to work and must have the appropriate
* administrator rights. Returns True on success.
*/
export type SetChatTitleData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  title: string; // New chat title, 1-128 characters
};

/**
* Use this method to change the description of a group, a supergroup or a channel. The bot must be
* an administrator in the chat for this to work and must have the appropriate administrator rights.
* Returns True on success.
*/
export type SetChatDescriptionData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  description?: string; // New chat description, 0-255 characters
};

/**
* Use this method to add a message to the list of pinned messages in a chat. In private chats and
* channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be
* an administrator with the &#39;can_pin_messages&#39; right or the &#39;can_edit_messages&#39;
* right to pin messages in groups and channels respectively. Returns True on success.
*/
export type PinChatMessageData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be pinned
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id: Integer; // Identifier of a message to pin
  disable_notification?: boolean; // Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
};

/**
* Use this method to remove a message from the list of pinned messages in a chat. In private chats
* and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an
* administrator with the &#39;can_pin_messages&#39; right or the &#39;can_edit_messages&#39; right
* to unpin messages in groups and channels respectively. Returns True on success.
*/
export type UnpinChatMessageData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be unpinned
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
};

/**
* Use this method to clear the list of pinned messages in a chat. In private chats and channel
* direct messages chats, no additional rights are required to unpin all pinned messages. Conversely,
* the bot must be an administrator with the &#39;can_pin_messages&#39; right or the
* &#39;can_edit_messages&#39; right to unpin all pinned messages in groups and channels
* respectively. Returns True on success.
*/
export type UnpinAllChatMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
*/
export type LeaveChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). Channel direct messages chats aren&#39;t supported; leave the corresponding channel instead.
};

/**
* Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on
* success.
*/
export type GetChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array
* of ChatMember objects.
*/
export type GetChatAdministratorsData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get the number of members in a chat. Returns Int on success.
*/
export type GetChatMemberCountData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get information about a member of a chat. The method is only guaranteed to work
* for other users if the bot is an administrator in the chat. Returns a ChatMember object on
* success.
*/
export type GetChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to set a new group sticker set for a supergroup. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. Use the field
* can_set_sticker_set optionally returned in getChat requests to check if the bot can use this
* method. Returns True on success.
*/
export type SetChatStickerSetData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  sticker_set_name: string; // Name of the sticker set to be set as the group sticker set
};

/**
* Use this method to delete a group sticker set from a supergroup. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. Use the field
* can_set_sticker_set optionally returned in getChat requests to check if the bot can use this
* method. Returns True on success.
*/
export type DeleteChatStickerSetData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user.
* Requires no parameters. Returns an Array of Sticker objects.
*/
export type GetForumTopicIconStickersData = void;

/**
* Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in
* the chat for this to work and must have the can_manage_topics administrator rights. Returns
* information about the created topic as a ForumTopic object.
*/
export type CreateForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  name: string; // Topic name, 1-128 characters
  icon_color?: 7322096 | 16766590 | 13338331 | 9367192 | 16749490 | 16478047; // Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
  icon_custom_emoji_id?: string; // Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
};

/**
* Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type EditForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
  name?: string; // New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
  icon_custom_emoji_id?: string; // New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
};

/**
* Use this method to close an open topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type CloseForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type ReopenForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to delete a forum topic along with all its messages in a forum supergroup chat.
* The bot must be an administrator in the chat for this to work and must have the
* can_delete_messages administrator rights. Returns True on success.
*/
export type DeleteForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to clear the list of pinned messages in a forum topic. The bot must be an
* administrator in the chat for this to work and must have the can_pin_messages administrator right
* in the supergroup. Returns True on success.
*/
export type UnpinAllForumTopicMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to edit the name of the &#39;General&#39; topic in a forum supergroup chat. The
* bot must be an administrator in the chat for this to work and must have the can_manage_topics
* administrator rights. Returns True on success.
*/
export type EditGeneralForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  name: string; // New topic name, 1-128 characters
};

/**
* Use this method to close an open &#39;General&#39; topic in a forum supergroup chat. The bot must
* be an administrator in the chat for this to work and must have the can_manage_topics administrator
* rights. Returns True on success.
*/
export type CloseGeneralForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to reopen a closed &#39;General&#39; topic in a forum supergroup chat. The bot
* must be an administrator in the chat for this to work and must have the can_manage_topics
* administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on
* success.
*/
export type ReopenGeneralForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to hide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights. The topic will be automatically closed if it was open. Returns True on success.
*/
export type HideGeneralForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be
* an administrator in the chat for this to work and must have the can_manage_topics administrator
* rights. Returns True on success.
*/
export type UnhideGeneralForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to clear the list of pinned messages in a General forum topic. The bot must be an
* administrator in the chat for this to work and must have the can_pin_messages administrator right
* in the supergroup. Returns True on success.
*/
export type UnpinAllGeneralForumTopicMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to send answers to callback queries sent from inline keyboards. The answer will be
* displayed to the user as a notification at the top of the chat screen or as an alert. On success,
* True is returned.
* Alternatively, the user can be redirected to the specified Game URL. For this option to work, you
* must first create a game for your bot via @BotFather and accept the terms. Otherwise, you may use
* links like t.me/your_bot?start=XXXX that open your bot with a parameter.
*/
export type AnswerCallbackQueryData = {
  callback_query_id: string; // Unique identifier for the query to be answered
  text?: string; // Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
  show_alert?: boolean; // If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
  url?: string; // URL that will be opened by the user&#39;s client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
  cache_time?: Integer; // The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
};

/**
* Use this method to get the list of boosts added to a chat by a user. Requires administrator rights
* in the chat. Returns a UserChatBoosts object.
*/
export type GetUserChatBoostsData = {
  chat_id: Integer | string; // Unique identifier for the chat or username of the channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to get information about the connection of the bot with a business account.
* Returns a BusinessConnection object on success.
*/
export type GetBusinessConnectionData = {
  business_connection_id: string; // Unique identifier of the business connection
};

/**
* Use this method to change the list of the bot&#39;s commands. See this manual for more details
* about bot commands. Returns True on success.
*/
export type SetMyCommandsData = {
  commands: BotCommand[]; // A JSON-serialized list of bot commands to be set as the list of the bot&#39;s commands. At most 100 commands can be specified.
  scope?: BotCommandScope; // A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
  language_code?: string; // A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
};

/**
* Use this method to delete the list of the bot&#39;s commands for the given scope and user
* language. After deletion, higher level commands will be shown to affected users. Returns True on
* success.
*/
export type DeleteMyCommandsData = {
  scope?: BotCommandScope; // A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
  language_code?: string; // A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
};

/**
* Use this method to get the current list of the bot&#39;s commands for the given scope and user
* language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is
* returned.
*/
export type GetMyCommandsData = {
  scope?: BotCommandScope; // A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
  language_code?: string; // A two-letter ISO 639-1 language code or an empty string
};

/**
* Use this method to change the bot&#39;s name. Returns True on success.
*/
export type SetMyNameData = {
  name?: string; // New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
  language_code?: string; // A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
};

/**
* Use this method to get the current bot name for the given user language. Returns BotName on
* success.
*/
export type GetMyNameData = {
  language_code?: string; // A two-letter ISO 639-1 language code or an empty string
};

/**
* Use this method to change the bot&#39;s description, which is shown in the chat with the bot if
* the chat is empty. Returns True on success.
*/
export type SetMyDescriptionData = {
  description?: string; // New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
  language_code?: string; // A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
};

/**
* Use this method to get the current bot description for the given user language. Returns
* BotDescription on success.
*/
export type GetMyDescriptionData = {
  language_code?: string; // A two-letter ISO 639-1 language code or an empty string
};

/**
* Use this method to change the bot&#39;s short description, which is shown on the bot&#39;s profile
* page and is sent together with the link when users share the bot. Returns True on success.
*/
export type SetMyShortDescriptionData = {
  short_description?: string; // New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
  language_code?: string; // A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
};

/**
* Use this method to get the current bot short description for the given user language. Returns
* BotShortDescription on success.
*/
export type GetMyShortDescriptionData = {
  language_code?: string; // A two-letter ISO 639-1 language code or an empty string
};

/**
* Use this method to change the bot&#39;s menu button in a private chat, or the default menu button.
* Returns True on success.
*/
export type SetChatMenuButtonData = {
  chat_id?: Integer; // Unique identifier for the target private chat. If not specified, default bot&#39;s menu button will be changed
  menu_button?: MenuButton; // A JSON-serialized object for the bot&#39;s new menu button. Defaults to MenuButtonDefault
};

/**
* Use this method to get the current value of the bot&#39;s menu button in a private chat, or the
* default menu button. Returns MenuButton on success.
*/
export type GetChatMenuButtonData = {
  chat_id?: Integer; // Unique identifier for the target private chat. If not specified, default bot&#39;s menu button will be returned
};

/**
* Use this method to change the default administrator rights requested by the bot when it&#39;s
* added as an administrator to groups or channels. These rights will be suggested to users, but they
* are free to modify the list before adding the bot. Returns True on success.
*/
export type SetMyDefaultAdministratorRightsData = {
  rights?: ChatAdministratorRights; // A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
  for_channels?: boolean; // Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
};

/**
* Use this method to get the current default administrator rights of the bot. Returns
* ChatAdministratorRights on success.
*/
export type GetMyDefaultAdministratorRightsData = {
  for_channels?: boolean; // Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
};

/**
* Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no
* parameters. Returns a Gifts object.
*/
export type GetAvailableGiftsData = void;

/**
* Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars
* by the receiver. Returns True on success.
*/
export type SendGiftData = {
  user_id?: Integer; // Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.
  chat_id?: Integer | string; // Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift.
  gift_id: string; // Identifier of the gift
  pay_for_upgrade?: boolean; // Pass True to pay for the gift upgrade from the bot&#39;s balance, thereby making the upgrade free for the receiver
  text?: string; // Text that will be shown along with the gift; 0-128 characters
  text_parse_mode?: string; // Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
  text_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
};

/**
* Gifts a Telegram Premium subscription to the given user. Returns True on success.
*/
export type GiftPremiumSubscriptionData = {
  user_id: Integer; // Unique identifier of the target user who will receive a Telegram Premium subscription
  month_count: 3 | 6 | 12; // Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12
  star_count: 1000 | 1500 | 2500; // Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months
  text?: string; // Text that will be shown along with the service message about the subscription; 0-128 characters
  text_parse_mode?: string; // Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
  text_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
};

/**
* Verifies a user on behalf of the organization which is represented by the bot. Returns True on
* success.
*/
export type VerifyUserData = {
  user_id: Integer; // Unique identifier of the target user
  custom_description?: string; // Custom description for the verification; 0-70 characters. Must be empty if the organization isn&#39;t allowed to provide a custom verification description.
};

/**
* Verifies a chat on behalf of the organization which is represented by the bot. Returns True on
* success.
*/
export type VerifyChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername). Channel direct messages chats can&#39;t be verified.
  custom_description?: string; // Custom description for the verification; 0-70 characters. Must be empty if the organization isn&#39;t allowed to provide a custom verification description.
};

/**
* Removes verification from a user who is currently verified on behalf of the organization
* represented by the bot. Returns True on success.
*/
export type RemoveUserVerificationData = {
  user_id: Integer; // Unique identifier of the target user
};

/**
* Removes verification from a chat that is currently verified on behalf of the organization
* represented by the bot. Returns True on success.
*/
export type RemoveChatVerificationData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Marks incoming message as read on behalf of a business account. Requires the can_read_messages
* business bot right. Returns True on success.
*/
export type ReadBusinessMessageData = {
  business_connection_id: string; // Unique identifier of the business connection on behalf of which to read the message
  chat_id: Integer; // Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.
  message_id: Integer; // Unique identifier of the message to mark as read
};

/**
* Delete messages on behalf of a business account. Requires the can_delete_sent_messages business
* bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot
* right to delete any message. Returns True on success.
*/
export type DeleteBusinessMessagesData = {
  business_connection_id: string; // Unique identifier of the business connection on behalf of which to delete the messages
  message_ids: Integer[]; // A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted
};

/**
* Changes the first and last name of a managed business account. Requires the can_change_name
* business bot right. Returns True on success.
*/
export type SetBusinessAccountNameData = {
  business_connection_id: string; // Unique identifier of the business connection
  first_name: string; // The new value of the first name for the business account; 1-64 characters
  last_name?: string; // The new value of the last name for the business account; 0-64 characters
};

/**
* Changes the username of a managed business account. Requires the can_change_username business bot
* right. Returns True on success.
*/
export type SetBusinessAccountUsernameData = {
  business_connection_id: string; // Unique identifier of the business connection
  username?: string; // The new value of the username for the business account; 0-32 characters
};

/**
* Changes the bio of a managed business account. Requires the can_change_bio business bot right.
* Returns True on success.
*/
export type SetBusinessAccountBioData = {
  business_connection_id: string; // Unique identifier of the business connection
  bio?: string; // The new value of the bio for the business account; 0-140 characters
};

/**
* Changes the profile photo of a managed business account. Requires the can_edit_profile_photo
* business bot right. Returns True on success.
*/
export type SetBusinessAccountProfilePhotoData = {
  business_connection_id: string; // Unique identifier of the business connection
  photo: InputProfilePhoto; // The new profile photo to set
  is_public?: boolean; // Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account&#39;s privacy settings. An account can have only one public photo.
};

/**
* Removes the current profile photo of a managed business account. Requires the
* can_edit_profile_photo business bot right. Returns True on success.
*/
export type RemoveBusinessAccountProfilePhotoData = {
  business_connection_id: string; // Unique identifier of the business connection
  is_public?: boolean; // Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account&#39;s privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.
};

/**
* Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires
* the can_change_gift_settings business bot right. Returns True on success.
*/
export type SetBusinessAccountGiftSettingsData = {
  business_connection_id: string; // Unique identifier of the business connection
  show_gift_button: boolean; // Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field
  accepted_gift_types: AcceptedGiftTypes; // Types of gifts accepted by the business account
};

/**
* Returns the amount of Telegram Stars owned by a managed business account. Requires the
* can_view_gifts_and_stars business bot right. Returns StarAmount on success.
*/
export type GetBusinessAccountStarBalanceData = {
  business_connection_id: string; // Unique identifier of the business connection
};

/**
* Transfers Telegram Stars from the business account balance to the bot&#39;s balance. Requires the
* can_transfer_stars business bot right. Returns True on success.
*/
export type TransferBusinessAccountStarsData = {
  business_connection_id: string; // Unique identifier of the business connection
  star_count: Integer; // Number of Telegram Stars to transfer; 1-10000
};

/**
* Returns the gifts received and owned by a managed business account. Requires the
* can_view_gifts_and_stars business bot right. Returns OwnedGifts on success.
*/
export type GetBusinessAccountGiftsData = {
  business_connection_id: string; // Unique identifier of the business connection
  exclude_unsaved?: boolean; // Pass True to exclude gifts that aren&#39;t saved to the account&#39;s profile page
  exclude_saved?: boolean; // Pass True to exclude gifts that are saved to the account&#39;s profile page
  exclude_unlimited?: boolean; // Pass True to exclude gifts that can be purchased an unlimited number of times
  exclude_limited?: boolean; // Pass True to exclude gifts that can be purchased a limited number of times
  exclude_unique?: boolean; // Pass True to exclude unique gifts
  sort_by_price?: boolean; // Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
  offset?: string; // Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
  limit?: Integer; // The maximum number of gifts to be returned; 1-100. Defaults to 100
};

/**
* Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business
* bot right. Returns True on success.
*/
export type ConvertGiftToStarsData = {
  business_connection_id: string; // Unique identifier of the business connection
  owned_gift_id: string; // Unique identifier of the regular gift that should be converted to Telegram Stars
};

/**
* Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts
* business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade
* is paid. Returns True on success.
*/
export type UpgradeGiftData = {
  business_connection_id: string; // Unique identifier of the business connection
  owned_gift_id: string; // Unique identifier of the regular gift that should be upgraded to a unique one
  keep_original_details?: boolean; // Pass True to keep the original gift text, sender and receiver in the upgraded gift
  star_count?: Integer; // The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count &gt; 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed.
};

/**
* Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts
* business bot right. Requires can_transfer_stars business bot right if the transfer is paid.
* Returns True on success.
*/
export type TransferGiftData = {
  business_connection_id: string; // Unique identifier of the business connection
  owned_gift_id: string; // Unique identifier of the regular gift that should be transferred
  new_owner_chat_id: Integer; // Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.
  star_count?: Integer; // The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required.
};

/**
* Posts a story on behalf of a managed business account. Requires the can_manage_stories business
* bot right. Returns Story on success.
*/
export type PostStoryData = {
  business_connection_id: string; // Unique identifier of the business connection
  content: InputStoryContent; // Content of the story
  active_period: 21600 | 43200 | 86400 | 172800; // Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400
  caption?: string; // Caption of the story, 0-2048 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the story caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  areas?: StoryArea[]; // A JSON-serialized list of clickable areas to be shown on the story
  post_to_chat_page?: boolean; // Pass True to keep the story accessible after it expires
  protect_content?: boolean; // Pass True if the content of the story must be protected from forwarding and screenshotting
};

/**
* Edits a story previously posted by the bot on behalf of a managed business account. Requires the
* can_manage_stories business bot right. Returns Story on success.
*/
export type EditStoryData = {
  business_connection_id: string; // Unique identifier of the business connection
  story_id: Integer; // Unique identifier of the story to edit
  content: InputStoryContent; // Content of the story
  caption?: string; // Caption of the story, 0-2048 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the story caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  areas?: StoryArea[]; // A JSON-serialized list of clickable areas to be shown on the story
};

/**
* Deletes a story previously posted by the bot on behalf of a managed business account. Requires the
* can_manage_stories business bot right. Returns True on success.
*/
export type DeleteStoryData = {
  business_connection_id: string; // Unique identifier of the business connection
  story_id: Integer; // Unique identifier of the story to delete
};

/**
* Use this method to edit text and game messages. On success, if the edited message is not an inline
* message, the edited Message is returned, otherwise True is returned. Note that business messages
* that were not sent by the bot and do not contain an inline keyboard can only be edited within 48
* hours from the time they were sent.
*/
export type EditMessageTextData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message to edit
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  text: string; // New text of the message, 1-4096 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the message text. See formatting options for more details.
  entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
  link_preview_options?: LinkPreviewOptions; // Link preview generation options for the message
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard.
};

/**
* Use this method to edit captions of messages. On success, if the edited message is not an inline
* message, the edited Message is returned, otherwise True is returned. Note that business messages
* that were not sent by the bot and do not contain an inline keyboard can only be edited within 48
* hours from the time they were sent.
*/
export type EditMessageCaptionData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message to edit
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  caption?: string; // New caption of the message, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the message caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard.
};

/**
* Use this method to edit animation, audio, document, photo, or video messages, or to add media to
* text messages. If a message is part of a message album, then it can be edited only to an audio for
* audio albums, only to a document for document albums and to a photo or a video otherwise. When an
* inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its
* file_id or specify a URL. On success, if the edited message is not an inline message, the edited
* Message is returned, otherwise True is returned. Note that business messages that were not sent by
* the bot and do not contain an inline keyboard can only be edited within 48 hours from the time
* they were sent.
*/
export type EditMessageMediaData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message to edit
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  media: InputMedia; // A JSON-serialized object for a new media content of the message
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for a new inline keyboard.
};

/**
* Use this method to edit live location messages. A location can be edited until its live_period
* expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the
* edited message is not an inline message, the edited Message is returned, otherwise True is
* returned.
*/
export type EditMessageLiveLocationData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message to edit
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  latitude: Float; // Latitude of new location
  longitude: Float; // Longitude of new location
  live_period?: Integer; // New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged
  horizontal_accuracy?: Float; // The radius of uncertainty for the location, measured in meters; 0-1500
  heading?: Integer; // Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  proximity_alert_radius?: Integer; // The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for a new inline keyboard.
};

/**
* Use this method to stop updating a live location message before live_period expires. On success,
* if the message is not an inline message, the edited Message is returned, otherwise True is
* returned.
*/
export type StopMessageLiveLocationData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message with live location to stop
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for a new inline keyboard.
};

/**
* Use this method to edit a checklist on behalf of a connected business account. On success, the
* edited Message is returned.
*/
export type EditMessageChecklistData = {
  business_connection_id: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer; // Unique identifier for the target chat
  message_id: Integer; // Unique identifier for the target message
  checklist: InputChecklist; // A JSON-serialized object for the new checklist
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for the new inline keyboard for the message
};

/**
* Use this method to edit only the reply markup of messages. On success, if the edited message is
* not an inline message, the edited Message is returned, otherwise True is returned. Note that
* business messages that were not sent by the bot and do not contain an inline keyboard can only be
* edited within 48 hours from the time they were sent.
*/
export type EditMessageReplyMarkupData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id?: Integer | string; // Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the message to edit
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard.
};

/**
* Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is
* returned.
*/
export type StopPollData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message to be edited was sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id: Integer; // Identifier of the original message with the poll
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for a new message inline keyboard.
};

/**
* Use this method to approve a suggested post in a direct messages chat. The bot must have the
* &#39;can_post_messages&#39; administrator right in the corresponding channel chat. Returns True on
* success.
*/
export type ApproveSuggestedPostData = {
  chat_id: Integer; // Unique identifier for the target direct messages chat
  message_id: Integer; // Identifier of a suggested post message to approve
  send_date?: Integer; // Point in time (Unix timestamp) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds (30 days) in the future
};

/**
* Use this method to decline a suggested post in a direct messages chat. The bot must have the
* &#39;can_manage_direct_messages&#39; administrator right in the corresponding channel chat.
* Returns True on success.
*/
export type DeclineSuggestedPostData = {
  chat_id: Integer; // Unique identifier for the target direct messages chat
  message_id: Integer; // Identifier of a suggested post message to decline
  comment?: string; // Comment for the creator of the suggested post; 0-128 characters
};

/**
* Use this method to delete a message, including service messages, with the following limitations:-
* A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a
* supergroup, channel, or forum topic creation can&#39;t be deleted.- A dice message in a private
* chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages
* in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.-
* Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot
* is an administrator of a group, it can delete any message there.- If the bot has
* can_delete_messages administrator right in a supergroup or a channel, it can delete any message
* there.- If the bot has can_manage_direct_messages administrator right in a channel, it can delete
* any message in the corresponding direct messages chat.Returns True on success.
*/
export type DeleteMessageData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id: Integer; // Identifier of the message to delete
};

/**
* Use this method to delete multiple messages simultaneously. If some of the specified messages
* can&#39;t be found, they are skipped. Returns True on success.
*/
export type DeleteMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_ids: Integer[]; // A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
};

/**
* Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent
* Message is returned.
*/
export type SendStickerData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  sticker: InputFile | string; // Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can&#39;t be sent via an HTTP URL.
  emoji?: string; // Emoji associated with the sticker; only for just uploaded stickers
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to get a sticker set. On success, a StickerSet object is returned.
*/
export type GetStickerSetData = {
  name: string; // Name of the sticker set
};

/**
* Use this method to get information about custom emoji stickers by their identifiers. Returns an
* Array of Sticker objects.
*/
export type GetCustomEmojiStickersData = {
  custom_emoji_ids: string[]; // A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
};

/**
* Use this method to upload a file with a sticker for later use in the createNewStickerSet,
* addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the
* uploaded File on success.
*/
export type UploadStickerFileData = {
  user_id: Integer; // User identifier of sticker file owner
  sticker: InputFile; // A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files »
  sticker_format: 'static' | 'animated' | 'video'; // Format of the sticker, must be one of “static”, “animated”, “video”
};

/**
* Use this method to create a new sticker set owned by a user. The bot will be able to edit the
* sticker set thus created. Returns True on success.
*/
export type CreateNewStickerSetData = {
  user_id: Integer; // User identifier of created sticker set owner
  name: string; // Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can&#39;t contain consecutive underscores and must end in &quot;_by_&lt;bot_username&gt;&quot;. &lt;bot_username&gt; is case insensitive. 1-64 characters.
  title: string; // Sticker set title, 1-64 characters
  stickers: InputSticker[]; // A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
  sticker_type?: 'regular' | 'mask' | 'custom_emoji'; // Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
  needs_repainting?: boolean; // Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
};

/**
* Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up
* to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
*/
export type AddStickerToSetData = {
  user_id: Integer; // User identifier of sticker set owner
  name: string; // Sticker set name
  sticker: InputSticker; // A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn&#39;t changed.
};

/**
* Use this method to move a sticker in a set created by the bot to a specific position. Returns True
* on success.
*/
export type SetStickerPositionInSetData = {
  sticker: string; // File identifier of the sticker
  position: Integer; // New sticker position in the set, zero-based
};

/**
* Use this method to delete a sticker from a set created by the bot. Returns True on success.
*/
export type DeleteStickerFromSetData = {
  sticker: string; // File identifier of the sticker
};

/**
* Use this method to replace an existing sticker in a sticker set with a new one. The method is
* equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet.
* Returns True on success.
*/
export type ReplaceStickerInSetData = {
  user_id: Integer; // User identifier of the sticker set owner
  name: string; // Sticker set name
  old_sticker: string; // File identifier of the replaced sticker
  sticker: InputSticker; // A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
};

/**
* Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The
* sticker must belong to a sticker set created by the bot. Returns True on success.
*/
export type SetStickerEmojiListData = {
  sticker: string; // File identifier of the sticker
  emoji_list: string[]; // A JSON-serialized list of 1-20 emoji associated with the sticker
};

/**
* Use this method to change search keywords assigned to a regular or custom emoji sticker. The
* sticker must belong to a sticker set created by the bot. Returns True on success.
*/
export type SetStickerKeywordsData = {
  sticker: string; // File identifier of the sticker
  keywords?: string[]; // A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
};

/**
* Use this method to change the mask position of a mask sticker. The sticker must belong to a
* sticker set that was created by the bot. Returns True on success.
*/
export type SetStickerMaskPositionData = {
  sticker: string; // File identifier of the sticker
  mask_position?: MaskPosition; // A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
};

/**
* Use this method to set the title of a created sticker set. Returns True on success.
*/
export type SetStickerSetTitleData = {
  name: string; // Sticker set name
  title: string; // Sticker set title, 1-64 characters
};

/**
* Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail
* file must match the format of the stickers in the set. Returns True on success.
*/
export type SetStickerSetThumbnailData = {
  name: string; // Sticker set name
  user_id: Integer; // User identifier of the sticker set owner
  thumbnail?: InputFile | string; // A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can&#39;t be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
  format: 'static' | 'animated' | 'video'; // Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a .WEBM video
};

/**
* Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
*/
export type SetCustomEmojiStickerSetThumbnailData = {
  name: string; // Sticker set name
  custom_emoji_id?: string; // Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
};

/**
* Use this method to delete a sticker set that was created by the bot. Returns True on success.
*/
export type DeleteStickerSetData = {
  name: string; // Sticker set name
};

/**
* Use this method to send answers to an inline query. On success, True is returned.No more than 50
* results per query are allowed.
*/
export type AnswerInlineQueryData = {
  inline_query_id: string; // Unique identifier for the answered query
  results: InlineQueryResult[]; // A JSON-serialized array of results for the inline query
  cache_time?: Integer; // The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
  is_personal?: boolean; // Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
  next_offset?: string; // Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don&#39;t support pagination. Offset length can&#39;t exceed 64 bytes.
  button?: InlineQueryResultsButton; // A JSON-serialized object describing a button to be shown above inline query results
};

/**
* Use this method to set the result of an interaction with a Web App and send a corresponding
* message on behalf of the user to the chat from which the query originated. On success, a
* SentWebAppMessage object is returned.
*/
export type AnswerWebAppQueryData = {
  web_app_query_id: string; // Unique identifier for the query to be answered
  result: InlineQueryResult; // A JSON-serialized object describing the message to be sent
};

/**
* Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
*/
export type SavePreparedInlineMessageData = {
  user_id: Integer; // Unique identifier of the target user that can use the prepared message
  result: InlineQueryResult; // A JSON-serialized object describing the message to be sent
  allow_user_chats?: boolean; // Pass True if the message can be sent to private chats with users
  allow_bot_chats?: boolean; // Pass True if the message can be sent to private chats with bots
  allow_group_chats?: boolean; // Pass True if the message can be sent to group and supergroup chats
  allow_channel_chats?: boolean; // Pass True if the message can be sent to channel chats
};

/**
* Use this method to send invoices. On success, the sent Message is returned.
*/
export type SendInvoiceData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  direct_messages_topic_id?: Integer; // Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
  title: string; // Product name, 1-32 characters
  description: string; // Product description, 1-255 characters
  payload: string; // Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
  provider_token?: string; // Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
  currency: string; // Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
  prices: LabeledPrice[]; // Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
  max_tip_amount?: Integer; // The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
  suggested_tip_amounts?: Integer[]; // A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
  start_parameter?: string; // Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
  provider_data?: string; // JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
  photo_url?: string; // URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
  photo_size?: Integer; // Photo size in bytes
  photo_width?: Integer; // Photo width
  photo_height?: Integer; // Photo height
  need_name?: boolean; // Pass True if you require the user&#39;s full name to complete the order. Ignored for payments in Telegram Stars.
  need_phone_number?: boolean; // Pass True if you require the user&#39;s phone number to complete the order. Ignored for payments in Telegram Stars.
  need_email?: boolean; // Pass True if you require the user&#39;s email address to complete the order. Ignored for payments in Telegram Stars.
  need_shipping_address?: boolean; // Pass True if you require the user&#39;s shipping address to complete the order. Ignored for payments in Telegram Stars.
  send_phone_number_to_provider?: boolean; // Pass True if the user&#39;s phone number should be sent to the provider. Ignored for payments in Telegram Stars.
  send_email_to_provider?: boolean; // Pass True if the user&#39;s email address should be sent to the provider. Ignored for payments in Telegram Stars.
  is_flexible?: boolean; // Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  suggested_post_parameters?: SuggestedPostParameters; // A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard. If empty, one &#39;Pay total price&#39; button will be shown. If not empty, the first button must be a Pay button.
};

/**
* Use this method to create a link for an invoice. Returns the created invoice link as String on
* success.
*/
export type CreateInvoiceLinkData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.
  title: string; // Product name, 1-32 characters
  description: string; // Product description, 1-255 characters
  payload: string; // Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
  provider_token?: string; // Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
  currency: string; // Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
  prices: LabeledPrice[]; // Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
  subscription_period?: Integer; // The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.
  max_tip_amount?: Integer; // The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
  suggested_tip_amounts?: Integer[]; // A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
  provider_data?: string; // JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
  photo_url?: string; // URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
  photo_size?: Integer; // Photo size in bytes
  photo_width?: Integer; // Photo width
  photo_height?: Integer; // Photo height
  need_name?: boolean; // Pass True if you require the user&#39;s full name to complete the order. Ignored for payments in Telegram Stars.
  need_phone_number?: boolean; // Pass True if you require the user&#39;s phone number to complete the order. Ignored for payments in Telegram Stars.
  need_email?: boolean; // Pass True if you require the user&#39;s email address to complete the order. Ignored for payments in Telegram Stars.
  need_shipping_address?: boolean; // Pass True if you require the user&#39;s shipping address to complete the order. Ignored for payments in Telegram Stars.
  send_phone_number_to_provider?: boolean; // Pass True if the user&#39;s phone number should be sent to the provider. Ignored for payments in Telegram Stars.
  send_email_to_provider?: boolean; // Pass True if the user&#39;s email address should be sent to the provider. Ignored for payments in Telegram Stars.
  is_flexible?: boolean; // Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
};

/**
* If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
* the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply
* to shipping queries. On success, True is returned.
*/
export type AnswerShippingQueryData = {
  shipping_query_id: string; // Unique identifier for the query to be answered
  ok: boolean; // Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
  shipping_options?: ShippingOption[]; // Required if ok is True. A JSON-serialized array of available shipping options.
  error_message?: string; // Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.
};

/**
* Once the user has confirmed their payment and shipping details, the Bot API sends the final
* confirmation in the form of an Update with the field pre_checkout_query. Use this method to
* respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive
* an answer within 10 seconds after the pre-checkout query was sent.
*/
export type AnswerPreCheckoutQueryData = {
  pre_checkout_query_id: string; // Unique identifier for the query to be answered
  ok: boolean; // Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
  error_message?: string; // Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. &quot;Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!&quot;). Telegram will display this message to the user.
};

/**
* A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success,
* returns a StarAmount object.
*/
export type GetMyStarBalanceData = void;

/**
* Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a
* StarTransactions object.
*/
export type GetStarTransactionsData = {
  offset?: Integer; // Number of transactions to skip in the response
  limit?: Integer; // The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
};

/**
* Refunds a successful payment in Telegram Stars. Returns True on success.
*/
export type RefundStarPaymentData = {
  user_id: Integer; // Identifier of the user whose payment will be refunded
  telegram_payment_charge_id: string; // Telegram payment identifier
};

/**
* Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns
* True on success.
*/
export type EditUserStarSubscriptionData = {
  user_id: Integer; // Identifier of the user whose subscription will be edited
  telegram_payment_charge_id: string; // Telegram payment identifier for the subscription
  is_canceled: boolean; // Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
};

/**
* Informs a user that some of the Telegram Passport elements they provided contains errors. The user
* will not be able to re-submit their Passport to you until the errors are fixed (the contents of
* the field for which you returned the error must change). Returns True on success.
* Use this if the data submitted by the user doesn&#39;t satisfy the standards your service requires
* for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a
* scan shows evidence of tampering, etc. Supply some details in the error message to make sure the
* user knows how to correct the issues.
*/
export type SetPassportDataErrorsData = {
  user_id: Integer; // User identifier
  errors: PassportElementError[]; // A JSON-serialized array describing the errors
};

/**
* Use this method to send a game. On success, the sent Message is returned.
*/
export type SendGameData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: Integer; // Unique identifier for the target chat. Games can&#39;t be sent to channel direct messages chats and channel chats.
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  game_short_name: string; // Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot&#39;s balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard. If empty, one &#39;Play game_title&#39; button will be shown. If not empty, the first button must launch the game.
};

/**
* Use this method to set the score of the specified user in a game message. On success, if the
* message is not an inline message, the Message is returned, otherwise True is returned. Returns an
* error, if the new score is not greater than the user&#39;s current score in the chat and force is
* False.
*/
export type SetGameScoreData = {
  user_id: Integer; // User identifier
  score: Integer; // New score, must be non-negative
  force?: boolean; // Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
  disable_edit_message?: boolean; // Pass True if the game message should not be automatically edited to include the current scoreboard
  chat_id?: Integer; // Required if inline_message_id is not specified. Unique identifier for the target chat
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the sent message
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
};

/**
* Use this method to get data for high score tables. Will return the score of the specified user and
* several of their neighbors in a game. Returns an Array of GameHighScore objects.
* This method will currently return scores for the target user, plus two of their closest neighbors
* on each side. Will also return the top three users if the user and their neighbors are not among
* them. Please note that this behavior is subject to change.
*/
export type GetGameHighScoresData = {
  user_id: Integer; // Target user id
  chat_id?: Integer; // Required if inline_message_id is not specified. Unique identifier for the target chat
  message_id?: Integer; // Required if inline_message_id is not specified. Identifier of the sent message
  inline_message_id?: string; // Required if chat_id and message_id are not specified. Identifier of the inline message
};

// ----------------------------
export type Method = {
  getUpdates: [GetUpdatesData, Update[]],
  setWebhook: [SetWebhookData, True],
  deleteWebhook: [DeleteWebhookData, True],
  getWebhookInfo: [GetWebhookInfoData, WebhookInfo],
  getMe: [GetMeData, User],
  logOut: [LogOutData, True],
  close: [CloseData, True],
  sendMessage: [SendMessageData, Message],
  forwardMessage: [ForwardMessageData, Message],
  forwardMessages: [ForwardMessagesData, MessageId[]],
  copyMessage: [CopyMessageData, MessageId],
  copyMessages: [CopyMessagesData, MessageId[]],
  sendPhoto: [SendPhotoData, Message],
  sendAudio: [SendAudioData, Message],
  sendDocument: [SendDocumentData, Message],
  sendVideo: [SendVideoData, Message],
  sendAnimation: [SendAnimationData, Message],
  sendVoice: [SendVoiceData, Message],
  sendVideoNote: [SendVideoNoteData, Message],
  sendPaidMedia: [SendPaidMediaData, Message],
  sendMediaGroup: [SendMediaGroupData, Message[]],
  sendLocation: [SendLocationData, Message],
  sendVenue: [SendVenueData, Message],
  sendContact: [SendContactData, Message],
  sendPoll: [SendPollData, Message],
  sendChecklist: [SendChecklistData, Message],
  sendDice: [SendDiceData, Message],
  sendChatAction: [SendChatActionData, True],
  setMessageReaction: [SetMessageReactionData, True],
  getUserProfilePhotos: [GetUserProfilePhotosData, UserProfilePhotos],
  setUserEmojiStatus: [SetUserEmojiStatusData, True],
  getFile: [GetFileData, File],
  banChatMember: [BanChatMemberData, True],
  unbanChatMember: [UnbanChatMemberData, True],
  restrictChatMember: [RestrictChatMemberData, True],
  promoteChatMember: [PromoteChatMemberData, True],
  setChatAdministratorCustomTitle: [SetChatAdministratorCustomTitleData, True],
  banChatSenderChat: [BanChatSenderChatData, True],
  unbanChatSenderChat: [UnbanChatSenderChatData, True],
  setChatPermissions: [SetChatPermissionsData, True],
  exportChatInviteLink: [ExportChatInviteLinkData, string],
  createChatInviteLink: [CreateChatInviteLinkData, ChatInviteLink],
  editChatInviteLink: [EditChatInviteLinkData, ChatInviteLink],
  createChatSubscriptionInviteLink: [CreateChatSubscriptionInviteLinkData, ChatInviteLink],
  editChatSubscriptionInviteLink: [EditChatSubscriptionInviteLinkData, ChatInviteLink],
  revokeChatInviteLink: [RevokeChatInviteLinkData, ChatInviteLink],
  approveChatJoinRequest: [ApproveChatJoinRequestData, True],
  declineChatJoinRequest: [DeclineChatJoinRequestData, True],
  setChatPhoto: [SetChatPhotoData, True],
  deleteChatPhoto: [DeleteChatPhotoData, True],
  setChatTitle: [SetChatTitleData, True],
  setChatDescription: [SetChatDescriptionData, True],
  pinChatMessage: [PinChatMessageData, True],
  unpinChatMessage: [UnpinChatMessageData, True],
  unpinAllChatMessages: [UnpinAllChatMessagesData, True],
  leaveChat: [LeaveChatData, True],
  getChat: [GetChatData, ChatFullInfo],
  getChatAdministrators: [GetChatAdministratorsData, ChatMember[]],
  getChatMemberCount: [GetChatMemberCountData, Integer],
  getChatMember: [GetChatMemberData, ChatMember],
  setChatStickerSet: [SetChatStickerSetData, True],
  deleteChatStickerSet: [DeleteChatStickerSetData, True],
  getForumTopicIconStickers: [GetForumTopicIconStickersData, Sticker[]],
  createForumTopic: [CreateForumTopicData, ForumTopic],
  editForumTopic: [EditForumTopicData, True],
  closeForumTopic: [CloseForumTopicData, True],
  reopenForumTopic: [ReopenForumTopicData, True],
  deleteForumTopic: [DeleteForumTopicData, True],
  unpinAllForumTopicMessages: [UnpinAllForumTopicMessagesData, True],
  editGeneralForumTopic: [EditGeneralForumTopicData, True],
  closeGeneralForumTopic: [CloseGeneralForumTopicData, True],
  reopenGeneralForumTopic: [ReopenGeneralForumTopicData, True],
  hideGeneralForumTopic: [HideGeneralForumTopicData, True],
  unhideGeneralForumTopic: [UnhideGeneralForumTopicData, True],
  unpinAllGeneralForumTopicMessages: [UnpinAllGeneralForumTopicMessagesData, True],
  answerCallbackQuery: [AnswerCallbackQueryData, True],
  getUserChatBoosts: [GetUserChatBoostsData, UserChatBoosts],
  getBusinessConnection: [GetBusinessConnectionData, BusinessConnection],
  setMyCommands: [SetMyCommandsData, True],
  deleteMyCommands: [DeleteMyCommandsData, True],
  getMyCommands: [GetMyCommandsData, BotCommand[]],
  setMyName: [SetMyNameData, True],
  getMyName: [GetMyNameData, BotName],
  setMyDescription: [SetMyDescriptionData, True],
  getMyDescription: [GetMyDescriptionData, BotDescription],
  setMyShortDescription: [SetMyShortDescriptionData, True],
  getMyShortDescription: [GetMyShortDescriptionData, BotShortDescription],
  setChatMenuButton: [SetChatMenuButtonData, True],
  getChatMenuButton: [GetChatMenuButtonData, MenuButton],
  setMyDefaultAdministratorRights: [SetMyDefaultAdministratorRightsData, True],
  getMyDefaultAdministratorRights: [GetMyDefaultAdministratorRightsData, ChatAdministratorRights],
  getAvailableGifts: [GetAvailableGiftsData, Gifts],
  sendGift: [SendGiftData, True],
  giftPremiumSubscription: [GiftPremiumSubscriptionData, True],
  verifyUser: [VerifyUserData, True],
  verifyChat: [VerifyChatData, True],
  removeUserVerification: [RemoveUserVerificationData, True],
  removeChatVerification: [RemoveChatVerificationData, True],
  readBusinessMessage: [ReadBusinessMessageData, True],
  deleteBusinessMessages: [DeleteBusinessMessagesData, True],
  setBusinessAccountName: [SetBusinessAccountNameData, True],
  setBusinessAccountUsername: [SetBusinessAccountUsernameData, True],
  setBusinessAccountBio: [SetBusinessAccountBioData, True],
  setBusinessAccountProfilePhoto: [SetBusinessAccountProfilePhotoData, True],
  removeBusinessAccountProfilePhoto: [RemoveBusinessAccountProfilePhotoData, True],
  setBusinessAccountGiftSettings: [SetBusinessAccountGiftSettingsData, True],
  getBusinessAccountStarBalance: [GetBusinessAccountStarBalanceData, StarAmount],
  transferBusinessAccountStars: [TransferBusinessAccountStarsData, True],
  getBusinessAccountGifts: [GetBusinessAccountGiftsData, OwnedGifts],
  convertGiftToStars: [ConvertGiftToStarsData, True],
  upgradeGift: [UpgradeGiftData, True],
  transferGift: [TransferGiftData, True],
  postStory: [PostStoryData, Story],
  editStory: [EditStoryData, Story],
  deleteStory: [DeleteStoryData, True],
  editMessageText: [EditMessageTextData, Message | True],
  editMessageCaption: [EditMessageCaptionData, Message | True],
  editMessageMedia: [EditMessageMediaData, Message | True],
  editMessageLiveLocation: [EditMessageLiveLocationData, Message | True],
  stopMessageLiveLocation: [StopMessageLiveLocationData, Message | True],
  editMessageChecklist: [EditMessageChecklistData, Message],
  editMessageReplyMarkup: [EditMessageReplyMarkupData, Message | True],
  stopPoll: [StopPollData, Poll],
  approveSuggestedPost: [ApproveSuggestedPostData, True],
  declineSuggestedPost: [DeclineSuggestedPostData, True],
  deleteMessage: [DeleteMessageData, True],
  deleteMessages: [DeleteMessagesData, True],
  sendSticker: [SendStickerData, Message],
  getStickerSet: [GetStickerSetData, StickerSet],
  getCustomEmojiStickers: [GetCustomEmojiStickersData, Sticker[]],
  uploadStickerFile: [UploadStickerFileData, File],
  createNewStickerSet: [CreateNewStickerSetData, True],
  addStickerToSet: [AddStickerToSetData, True],
  setStickerPositionInSet: [SetStickerPositionInSetData, True],
  deleteStickerFromSet: [DeleteStickerFromSetData, True],
  replaceStickerInSet: [ReplaceStickerInSetData, True],
  setStickerEmojiList: [SetStickerEmojiListData, True],
  setStickerKeywords: [SetStickerKeywordsData, True],
  setStickerMaskPosition: [SetStickerMaskPositionData, True],
  setStickerSetTitle: [SetStickerSetTitleData, True],
  setStickerSetThumbnail: [SetStickerSetThumbnailData, True],
  setCustomEmojiStickerSetThumbnail: [SetCustomEmojiStickerSetThumbnailData, True],
  deleteStickerSet: [DeleteStickerSetData, True],
  answerInlineQuery: [AnswerInlineQueryData, True],
  answerWebAppQuery: [AnswerWebAppQueryData, SentWebAppMessage],
  savePreparedInlineMessage: [SavePreparedInlineMessageData, PreparedInlineMessage],
  sendInvoice: [SendInvoiceData, Message],
  createInvoiceLink: [CreateInvoiceLinkData, string],
  answerShippingQuery: [AnswerShippingQueryData, True],
  answerPreCheckoutQuery: [AnswerPreCheckoutQueryData, True],
  getMyStarBalance: [GetMyStarBalanceData, StarAmount],
  getStarTransactions: [GetStarTransactionsData, StarTransactions],
  refundStarPayment: [RefundStarPaymentData, True],
  editUserStarSubscription: [EditUserStarSubscriptionData, True],
  setPassportDataErrors: [SetPassportDataErrorsData, True],
  sendGame: [SendGameData, Message],
  setGameScore: [SetGameScoreData, Message | True],
  getGameHighScores: [GetGameHighScoresData, GameHighScore[]],
};
