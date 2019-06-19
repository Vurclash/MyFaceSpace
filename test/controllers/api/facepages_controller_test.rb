require 'test_helper'

class Api::FacepagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_facepages_index_url
    assert_response :success
  end

  test "should get update" do
    get api_facepages_update_url
    assert_response :success
  end

end
