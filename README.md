# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|strings|null: false, index: true|
|email|strings|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: :group-users
- has_many :group-users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|strings|null: false|
|image|strings||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|

### Association
- has_many :users, through: :group-users
- has_many :group-users

## group-usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :groupes