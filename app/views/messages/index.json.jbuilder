json.new_message @new_message.each do |message|
  json.name           message.user.name
  json.created_at     message.created_at
  json.text           message.text
  json.image          message.image.url
  json.id             message.id
end
