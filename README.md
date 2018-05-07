# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|
|email|string|devise|

### Association
- has_many :messages
- has_many :groups, through: :group-users
- has_many :group-users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string||
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- has_many :users, through: :group-users
- has_many :group-users
- has_many :messages

## group-usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groupes