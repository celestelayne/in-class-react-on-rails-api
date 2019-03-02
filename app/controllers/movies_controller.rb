class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render json: {
      message: "success",
      movies: @movies
    }
  end

  def show
    begin
      @movie = Movie.find(params[:id])
      render json: {
        message: 'ok',
        movie: @movie
      }
    rescue ActiveRecord::RecordNotFound
      render json: {
        message: 'Could not find Movie with that id'
      },
      status: 404
    rescue Exception
      render json: {
        message: 'There was some other error'
      },
      status: 500
    end
  end

end
