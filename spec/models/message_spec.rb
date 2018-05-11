require 'rails_helper'

describe Message do
  describe '#create' do
    context "can save" do
      it "is valid with an only text" do
        message = create(:message, image: nil)
        expect(message).to be_valid
      end

      it "is valid with an only image" do
        message = create(:message, text: nil)
        expect(message).to be_valid
      end

      it "is valid with both a text and an image" do
        expect(build(:message)).to be_valid
      end
    end

    context "cannot save" do
      it "is invalid without both a text and an image" do
        message = build(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include("が入力されていません。")
      end

      it "is invalid without a group_id" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("は必須の値です。")
      end

      it "is invalid without a user_id" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("は必須の値です。")
      end
    end
  end
end
