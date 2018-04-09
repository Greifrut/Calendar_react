require 'test_helper'

class AppoimentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get appoiments_index_url
    assert_response :success
  end

end
