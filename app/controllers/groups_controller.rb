class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def index
    @message = "groups_controllerでsetした@message"
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: "グループを作成しました"
    else
      render :new
    end
  end

  def edit
    # @group = current_user.groups.find(params[:id])
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: "グループを編集しました"
    else
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, user_ids: [] )
  end

  def set_group
    @group = Group.find(params[:id])
    binding.pry
  end
end